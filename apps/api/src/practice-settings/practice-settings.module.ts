import { Module } from '@nestjs/common';
import { PracticeSettingsController } from './practice-settings.controller.js';
import { PracticeSettingsService } from './practice-settings.service.js';

@Module({
  controllers: [PracticeSettingsController],
  providers: [PracticeSettingsService],
})
export class PracticeSettingsModule {}
