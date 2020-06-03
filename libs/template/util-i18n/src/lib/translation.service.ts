import {Injectable} from '@angular/core';

import {AbstractTranslationService, Language} from '@spmka/shared/util-i18n';
import {LoggerService} from '@spmka/shared/util-logger';
import {TranslationDataService} from './translation-data.service';
import {english} from './translation.config';

@Injectable({
  providedIn: 'root'
})
export class TranslationService extends AbstractTranslationService {
  /**
   * Constructor.
   * @param logger the injected logger.
   * @param translationDataService the injected translation data service.
   */
  constructor(protected logger: LoggerService, protected translationDataService: TranslationDataService) {
    super(logger, translationDataService);
  }

  /** Returns the fallback language. */
  protected getFallBackLanguage(): Language {
    return english;
  }
}
