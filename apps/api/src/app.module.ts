import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AuthModule } from './auth/auth.module.js';
import { PracticeSettingsModule } from './practice-settings/practice-settings.module.js';

@Module({
  imports: [AuthModule, PracticeSettingsModule],
  controllers: [AppController],
})
export class AppModule {}
