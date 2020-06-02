import {AbstractTranslationDataService} from './abstract-translation-data.service';

/** The i18n translation keys */
export class I18nTranslationKeys {
  /** The i18n translation keys */
  @AbstractTranslationDataService.collectTranslation('i18n') public static readonly translationKeys = {
    i18n: {
      dateFormat: '',
      dateTimeFormat: '',
      noDecimalFormat: '',
      decimalFormat: '',
      currencyFormat: '',
      currencySymbol: '',
      currencySymbolPosition: '',
      decimalCharacter: '',
      groupingCharacter: ''
    }
  };
}
