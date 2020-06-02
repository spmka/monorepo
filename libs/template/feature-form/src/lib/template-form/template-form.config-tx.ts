import {AbstractTranslationDataService} from '@spmka/shared/util-i18n';

export class TemplateFormTranslationKeys {
  /** The template form translation keys */
  @AbstractTranslationDataService.collectTranslation('templateForm') public static readonly translationKeys = {
    templateForm: {
      normalInput: {
        text: '',
        placeHolder: ''
      },
      emailInput: {
        text: '',
        placeHolder: '',
        errorMessageEmpty: '',
        errorMessageWrong: ''
      }
    }
  }
}
