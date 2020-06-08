import {AbstractTranslationDataService} from '@spmka/shared/util-i18n';

/** The template form translation keys */
export class TemplateFormTranslationKeys {
  @AbstractTranslationDataService.collectTranslation('templateForm') public static readonly translationKeys = {
    templateForm: {
      numberInput: {
        text: '',
        placeholder: ''
      },
      emailInput: {
        text: '',
        placeholder: '',
        errorMessageEmpty: '',
        errorMessageWrong: ''
      }
    }
  }
}
