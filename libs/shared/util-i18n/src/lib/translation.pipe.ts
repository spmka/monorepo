import {Pipe, PipeTransform} from '@angular/core';
import {AbstractTranslationService} from './abstract-translation.service';

/**
 * Translation pipe.
 */
@Pipe({
  name: 'i18n',
  // tslint:disable-next-line:no-pipe-impure
  pure: false
  // false is needed here because the translations might be changed and the parameters for the pipe remain the same
  // pure: true -> call pipe only when changes are detected on the pipes parameters
  // pure: false -> call pipe on every change detection cycle, not only on changes detected in the pipes parameter
})
export class TranslationPipe implements PipeTransform {
  /**
   * Constructor.
   * @param translationService the translation service to use.
   */
  constructor(protected translationService: AbstractTranslationService) {
  }

  /**
   * Translates the given translation key.
   * If parameters are given then a text like {{name}} is replaced by the value of the name property
   * in the given parameter object.
   * @param i18nKey the key to translate
   * @param parameters parameter values (object) for the translation ind the form {name: value, ...}
   * @returns the translation text
   */
  public transform(i18nKey: string, parameters?: object): string {
    return this.translationService.translate(i18nKey, parameters);
  }
}
