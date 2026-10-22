import { BadRequestException } from '@nestjs/common';
import { registerSchema } from '@tutor-crm/shared';
import { ZodValidationPipe } from './zod-validation.pipe.js';

describe('ZodValidationPipe', () => {
  const pipe = new ZodValidationPipe(registerSchema);

  it('returns parsed data for a valid payload', () => {
    const result = pipe.transform({
      fullName: '  Sarah Jenkins  ',
      email: 'sarah@test.com',
      password: 'Pass12345',
      subject: 'stem',
      acceptedTerms: true,
    });

    expect(result.fullName).toBe('Sarah Jenkins');
  });

  it('throws BadRequestException for an invalid payload', () => {
    expect(() => pipe.transform({ email: 'bad' })).toThrow(BadRequestException);
  });
});
