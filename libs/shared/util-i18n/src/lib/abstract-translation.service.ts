import {DecimalPipe} from '@angular/common';
import * as moment from 'moment';
import {Moment} from 'moment';

import {LoggerService} from '@spmka/shared/util-logger';
import {ObjectTools, StringTools} from '@spmka/shared/util-tools';

import {Language} from './language.model';
import {AbstractTranslationDataService} from './abstract-translation-data.service';
import { I18nTranslationKeys } from './i18n.config-tx';

/**
 * Abstract base for translation services.
 */
export abstract class AbstractTranslationService {

  /**
   * Constructor.
   * The translation service can't be a BaseService because BaseService uses the translation service.
   * @param logger the injected logger.
   * @param translationDataService the injected translation data service.
   */
  protected constructor(protected logger: LoggerService,
      protected translationDataService: AbstractTranslationDataService) {
    this.logger.logStartConstruct(AbstractTranslationService.name);
    this.fallBackLanguage = this.getFallBackLanguage();
    this.decimalPipe = new DecimalPipe('en-US');
    this.logger.logEndConstruct(AbstractTranslationService.name);
  }
  /** The decimal pipe for number formatting */
  public decimalPipe: DecimalPipe;
  /** The current locale */
  private currentLanguage: Language;
  /** The default locale -> fallback for not existing translations */
  private readonly fallBackLanguage: Language;
  /** The current date format */
  private currentDateFormat: string;
  /** The current date and time format */
  private currentDateTimeFormat: string;
  /** The current currency format */
  private currentCurrencyFormat: string;
  /** The current currency symbol */
  private currentCurrencySymbol: string;
  /** The current currency symbol position */
  private currentCurrencySymbolPosition: string;
  /** The current decimal character */
  private currentDecimalCharacter: string;
  /** The current grouping character */
  private currentGroupingCharacter: string;
  /** The current decimal format */
  private currentDecimalFormat: string;
  /** The current no decimal (integer) format */
  private currentNoDecimalFormat: string;
  /** The translation keys */
  private readonly tx = I18nTranslationKeys.translationKeys.i18n;

  /**
   * Formats a moment value with the given format.
   * @param value the value to format as a date.
   * @param format the format to use.
   */
  protected static formatMoment(value: Moment, format: string): string {
    if (value) {
      return value.format(format);
    } else {
      return '';
    }
  }

  /**
   * Must be overwritten by the concrete implementation.
   * Returns the fallback language for non existing translations.
   */
  protected abstract getFallBackLanguage(): Language;


  /**
   * Called when the locale was changed.
   * @param newLanguage the new language.
   */
  public changeLanguage(newLanguage: Language) {
    this.logger.debug('AbstractTranslationService: language changed to ' + newLanguage.name);
    this.currentLanguage = newLanguage;
    this.loadTranslationData();
    this.currentDateFormat = this.translate(this.tx.dateFormat);
    this.currentDateTimeFormat = this.translate(this.tx.dateTimeFormat);
    this.currentCurrencyFormat = this.translate(this.tx.currencyFormat);
    this.currentCurrencySymbol = this.translate(this.tx.currencySymbol);
    this.currentCurrencySymbolPosition = this.translate(this.tx.currencySymbolPosition);
    this.currentDecimalCharacter = this.translate(this.tx.decimalCharacter);
    this.currentGroupingCharacter = this.translate(this.tx.groupingCharacter);
    this.currentDecimalFormat = this.translate(this.tx.decimalFormat);
    this.currentNoDecimalFormat = this.translate(this.tx.noDecimalFormat);
  }

  /** Returns the currently set language. */
  public getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  /**
   * Translates a translatable item to its translation.
   * @param i18nName the translatable item
   * @param params Parameters to fill into the translation
   * @returns the translated text
   */
  public translate(i18nName: string, params?: any): string {
    if (!i18nName) {
      return '';
    }
    // noinspection SuspiciousTypeOfGuard
    if (typeof i18nName !== 'string') {
      this.logger.error('Translation key is not a string!', i18nName);
      return 'translation error';
    }
    if (this.translationDataService.isNewTranslationsCollected()) {
      // first we have to load new translations
      this.loadTranslationData();
    }
    if (this.currentLanguage?.translationData) {
      return this.getTranslation(i18nName, this.currentLanguage.translationData, params);
    } else if (this.fallBackLanguage?.translationData) {
      return this.getTranslation(i18nName, this.fallBackLanguage.translationData, params);
    } else {
      this.logger.error('No current or fallback language defined in TranslationService!', i18nName);
      return i18nName;
    }
  }

  /**
   * Translates a translatable item to its translation.
   * @param i18nName the translatable item
   * @param translationData the translation data
   * @param params Parameters to fill into the translation
   * @returns the translated text
   */
  public getTranslation(i18nName: string, translationData: any, params?: any): string {
    let translation: string;
    try {
      translation = i18nName.split('.').reduce((obj, key) => obj[key], translationData);
      if (translation && translation.indexOf('[[') === 0) {
        return this.translate(translation.substr(2, translation.indexOf(']]') - 2), params);
      }
      if ((translation === '' || !translation) && !ObjectTools.isEqual(translationData,
        this.fallBackLanguage.translationData)) {
        return this.getTranslation(i18nName, this.fallBackLanguage.translationData, params);
      }
      if (!translation) {
        translation = i18nName;
      }
      translation = StringTools.replaceParameters(translation, params);

    } catch (err) {
      // this.logger.info(`Translation error: <${i18nName}> Error: ${err}`);
      // We try again with the fallback language if this is not the current language
      if (!ObjectTools.isEqual(translationData, this.fallBackLanguage.translationData)) {
        return this.getTranslation(i18nName, this.fallBackLanguage.translationData, params);
      }
      translation = StringTools.replaceParameters(i18nName, params);
    }
    return translation;
  }

  /**
   * Formats a decimal value.
   * @param value the value to format as a decimal value.
   * @param format the optional decimal format.
   */
  public formatDecimal(value: number, format: string = this.currentDecimalFormat): string {
    if (value !== undefined) {
      return this.changeDecimalAndGroupingCharacters(this.decimalPipe.transform(value, format));
    } else {
      return '';
    }
  }

  /**
   * Formats a non decimal (integer) value.
   * @param value the value to format as a integer value.
   * @param format the optional non decimal format.
   */
  public formatNoDecimal(value: number, format: string = this.currentNoDecimalFormat): string {
    return this.formatDecimal(value, format);
  }

  /**
   * Formats a currency value.
   * @param value the value to format as a currency.
   * @param withSymbol the optional flag if the currency symbol shall be shown.
   * @param format the optional currency format.
   */
  public formatCurrency(value: number, withSymbol: boolean = false,
    format: string = this.currentCurrencyFormat): string {
    if (value !== undefined) {
      let formattedValue = this.changeDecimalAndGroupingCharacters(this.decimalPipe.transform(value, format));
      if (withSymbol) {
        if (this.currentCurrencySymbolPosition === 'left') {
          formattedValue = this.currentCurrencySymbol + ' ' + formattedValue;
        } else {
          formattedValue = formattedValue + ' ' + this.currentCurrencySymbol;
        }
      }
      return formattedValue;
    } else {
      return '';
    }
  }

  /**
   * Formats a date value.
   * @param value the value to format as a date.
   * @param withTime flag for long date time format
   * @returns the formatted value as a string.
   */
  public formatDate(value: Date | Moment, withTime: boolean = false): string {
    if (value) {
      if (withTime) {
        return AbstractTranslationService.formatMoment(moment(value), this.currentDateTimeFormat);
      } else {
        return AbstractTranslationService.formatMoment(moment(value), this.currentDateFormat);
      }
    } else {
      return '';
    }
  }

  /** Loads the translation data for the current and fallback language */
  protected loadTranslationData() {
    // Todo: Rethink modules and loading of translations -> load per module or load all existing ones
    this.translationDataService.unsetNewTranslationsCollectedState();
    if (this.currentLanguage) {
      this.translationDataService.setTranslationData(this.currentLanguage, this.translationDataService.getModules(), false);
    }
    if (this.fallBackLanguage) {
      if (this.currentLanguage?.locale !== this.fallBackLanguage?.locale) {
        this.translationDataService.setTranslationData(this.fallBackLanguage, this.translationDataService.getModules(), false);
      } else {
        this.fallBackLanguage.translationData = this.currentLanguage.translationData;
      }
    }
  }

  /**
   * Changes english decimal and Grouping characters to the correct ones for the current locale
   * @param formattedValue the formatted value where the characters will be changed.
   */
  protected changeDecimalAndGroupingCharacters(formattedValue: string) {
    return formattedValue
      .replace(/\./g, 'D')
      .replace(/,/g, 'G')
      .replace(/D/g, this.currentDecimalCharacter)
      .replace(/G/g, this.currentGroupingCharacter);
  }
}

