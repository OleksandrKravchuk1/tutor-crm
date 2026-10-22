import { Body, Controller, Get, Put } from '@nestjs/common';
import { practiceSettingsSchema, type PracticeSettings } from '@tutor-crm/shared';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { PracticeSettingsService } from './practice-settings.service.js';

@Controller('practice-settings')
export class PracticeSettingsController {
  constructor(private readonly practiceSettingsService: PracticeSettingsService) {}

  @Get()
  get(): PracticeSettings {
    return this.practiceSettingsService.get();
  }

  @Put()
  update(
    @Body(new ZodValidationPipe(practiceSettingsSchema)) settings: PracticeSettings,
  ): PracticeSettings {
    return this.practiceSettingsService.update(settings);
  }
}
