import { ConflictException } from '@nestjs/common';
import type { RegisterPayload } from '@tutor-crm/shared';
import { AuthService } from './auth.service.js';

const payload: RegisterPayload = {
  fullName: 'Sarah Jenkins',
  email: 'Sarah@Test.com',
  password: 'Pass12345',
  subject: 'stem',
  acceptedTerms: true,
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  it('registers a tutor without exposing the password', async () => {
    const account = await service.register(payload);

    expect(account).toMatchObject({ fullName: 'Sarah Jenkins', email: 'sarah@test.com' });
    expect(account).not.toHaveProperty('password');
  });

  it('rejects a second account with the same email', async () => {
    await service.register(payload);
    await expect(service.register(payload)).rejects.toThrow(ConflictException);
  });
});
