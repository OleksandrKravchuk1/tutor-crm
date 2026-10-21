import { Injectable } from '@nestjs/common';
import { DEFAULT_PRACTICE_SETTINGS, type PracticeSettings } from '@tutor-crm/shared';

@Injectable()
export class PracticeSettingsService {
  // Single in-memory record until auth + a database scope settings per tutor
  private settings: PracticeSettings = DEFAULT_PRACTICE_SETTINGS;

  get(): PracticeSettings {
    return this.settings;
  }

  update(settings: PracticeSettings): PracticeSettings {
    this.settings = settings;
    return this.settings;
  }
}
