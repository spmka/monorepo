import {AbstractTranslationDataService} from '@spmka/shared/util-i18n';

export class LocaleSwitchTranslationKeys {
  /** The template form translation keys */
  @AbstractTranslationDataService.collectTranslation('app') public static readonly translationKeys = {
    localeSwitch: {
      buttons: {
        german: '',
        english: ''
      }
    }
  };
}
