import { ConflictException, Injectable } from '@nestjs/common';
import type { RegisterPayload, TutorAccount } from '@tutor-crm/shared';
import { randomUUID } from 'node:crypto';
import { hashPassword } from './password.js';

type StoredAccount = {
  account: TutorAccount;
  passwordHash: string;
};

@Injectable()
export class AuthService {
  // In-memory store until a database is added; keyed by lower-cased email
  private readonly accounts = new Map<string, StoredAccount>();

  async register(payload: RegisterPayload): Promise<TutorAccount> {
    const email = payload.email.toLowerCase();

    if (this.accounts.has(email)) {
      throw new ConflictException('An account with this email already exists');
    }

    const account: TutorAccount = {
      id: randomUUID(),
      fullName: payload.fullName,
      email,
      subject: payload.subject,
    };

    this.accounts.set(email, { account, passwordHash: await hashPassword(payload.password) });
    return account;
  }
}
