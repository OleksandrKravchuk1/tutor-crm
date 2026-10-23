import { ServiceUnavailableException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaController } from './prisma.controller.js';
import { PrismaService } from './prisma.service.js';

describe('PrismaController', () => {
  let controller: PrismaController;
  const prisma = { isHealthy: vi.fn<() => Promise<boolean>>() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismaController],
      providers: [{ provide: PrismaService, useValue: prisma }],
    }).compile();

    controller = module.get<PrismaController>(PrismaController);
  });

  it('reports a reachable database', async () => {
    prisma.isHealthy.mockResolvedValue(true);
    await expect(controller.getDbHealth()).resolves.toEqual({
      status: 'ok',
      database: 'reachable',
    });
  });

  it('returns 503 when the database is unreachable', async () => {
    prisma.isHealthy.mockResolvedValue(false);
    await expect(controller.getDbHealth()).rejects.toBeInstanceOf(
      ServiceUnavailableException,
    );
  });
});
