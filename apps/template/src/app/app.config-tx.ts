import {AbstractTranslationDataService} from '@spmka/shared/util-i18n';

export class AppTranslationKeys {
  /** The template form translation keys */
  @AbstractTranslationDataService.collectTranslation('app') public static readonly translationKeys = {
    app: {
      buttons: {
        german: '',
        english: ''
      },
    }
  }
}
