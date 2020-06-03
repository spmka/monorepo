import {Injectable} from '@angular/core';
import {AbstractTranslationDataService, Language} from '@spmka/shared/util-i18n';
import {LoggerService} from '@spmka/shared/util-logger';
import {txDemoDataDE, txDemoDataEN} from './translation.config';

/** The translation data service is responsible to get the translation data for a language */
@Injectable({
  providedIn: 'root'
})
export class TranslationDataService extends AbstractTranslationDataService {
  /**
   * Constructor.
   * @param logger The injected Logger.
   */
  protected constructor(protected logger: LoggerService) {
    super(logger);
  }

  public setTranslationData(language: Language, modules: string[], forceReload: boolean) {
    // Just for demonstration purposes, the real translation data must be fetched from the server!
    if (language.locale === 'de') {
      language.translationData = txDemoDataDE;
    }
    if (language.locale === 'en') {
      language.translationData = txDemoDataEN;
    }
  }
}
