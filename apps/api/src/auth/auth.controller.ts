import { Body, Controller, Post } from '@nestjs/common';
import { registerSchema, type RegisterPayload, type TutorAccount } from '@tutor-crm/shared';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body(new ZodValidationPipe(registerSchema)) payload: RegisterPayload,
  ): Promise<TutorAccount> {
    return this.authService.register(payload);
  }
}
