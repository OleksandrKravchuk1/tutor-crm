import { ConflictException, Injectable } from '@nestjs/common';
import type { RegisterPayload, SubjectId, TutorAccount } from '@tutor-crm/shared';
import * as argon2 from 'argon2';
import { AccountRole, Prisma, SubjectCategory } from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';

const SUBJECT_CATEGORY: Record<SubjectId, SubjectCategory> = {
  stem: SubjectCategory.STEM,
  languages: SubjectCategory.LANGUAGES,
  'test-prep': SubjectCategory.TEST_PREP,
  'music-arts': SubjectCategory.MUSIC_ARTS,
  other: SubjectCategory.OTHER,
};

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async registerTutor({ email, password, fullName, subject }: RegisterPayload): Promise<TutorAccount> {
    const passwordHash = await argon2.hash(password);

    try {
      const account = await this.prisma.account.create({
        data: {
          email,
          passwordHash,
          role: AccountRole.TUTOR,
          tutorProfile: {
            create: {
              fullName,
              primarySubject: SUBJECT_CATEGORY[subject],
            },
          },
        },
        select: { id: true },
      });

      return { id: account.id, email, fullName, subject };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Email already registered');
      }
      throw error;
    }
  }
}
