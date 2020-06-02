import {LoggerService} from '@spmka/shared/util-logger';
import {Language} from './language.model';
import { ArrayTools, StructureKeyTools } from '@spmka/shared/util-tools';

/** Describes a translation data record */
export interface TranslationDataRecord {
  /** optional translation id -> needed for database? Must be checked! */
  id?: number;
  /** the module name for the translation data */
  module: string;
  /** The locale id */
  locale: string;
  /** The translation data. All keys are strings and the object structure is the translation key. */
  translationData: any;
}

/** Abstract translation data service */
export abstract class AbstractTranslationDataService {

  /**
   * Constructor.
   * @param logger The injected Logger.
   */
  protected constructor(protected logger: LoggerService) {
    this.logger.logStartConstruct(AbstractTranslationDataService.name);
    this.logger.logEndConstruct(AbstractTranslationDataService.name);
  }
  /** Will be set to true when new translations were collected */
  private static newTranslationsCollected = false;
  /** All the collected module names */
  protected static modules: Array<string> = [];

  /**
   * The decorator function to collect translations.
   * @param module The module name to collect the translations for.
   */
  public static collectTranslation(module: string) {
    return (target, propertyName) => AbstractTranslationDataService.doCollect(module.toString(), target, propertyName);
  }

  /**
   * Does the collection and the modifying of the translation key object.
   * @param module The module of the translations.
   * @param target the target class.
   * @param propertyName the property name of the translation keys object.
   */
  protected static doCollect(module: string, target: object, propertyName: string) {
    AbstractTranslationDataService.modules = ArrayTools.addUniq(AbstractTranslationDataService.modules, module);
    StructureKeyTools.replacePropertyValuesByStructureKeys(target[propertyName]);
    console.log(module, target[propertyName]);
    AbstractTranslationDataService.newTranslationsCollected = true;
  }

  /**
   * Sets the translation data into the given language object.
   * @param language The language object to modify (property translationData will be set)
   * @param modules The list of module for which the translation data will be merged into the translationData property.
   * @param forceReload True to reload translation data.
   */
  public abstract setTranslationData(language: Language, modules: Array<string>, forceReload: boolean);

  /** Returns the list of collected module names */
  public getModules(): Array<string> {
    return AbstractTranslationDataService.modules;
  }

  /** Checks if new translations had been collected. If yes returns true and resets the status to false */
  public isNewTranslationsCollected(): boolean {
    if (AbstractTranslationDataService.newTranslationsCollected) {
      AbstractTranslationDataService.newTranslationsCollected = false;
      return true;
    }
    return false;
  }

  /** Unset the status that new translations are collected. */
  public unsetNewTranslationsCollectedState() {
    AbstractTranslationDataService.newTranslationsCollected = false;
  }
}
