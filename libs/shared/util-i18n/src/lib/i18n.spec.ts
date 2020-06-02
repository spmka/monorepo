import * as moment from 'moment';
import {LoggerService} from '@spmka/shared/util-logger';

import {AbstractTranslationService} from './abstract-translation.service';
import {Language} from './language.model';
import {AbstractTranslationDataService} from './abstract-translation-data.service';
import {I18nTranslationKeys} from './i18n.config-tx';
import {TranslationPipe} from './translation.pipe';

const decimalTests = [
  {value: 123456.123456, de: '123.456,12', en: '123,456.12', cn: '123,456.12'},
  {value: 123.123456, de: '123,12', en: '123.12', cn: '123.12'},
  {value: 123.1, de: '123,10', en: '123.10', cn: '123.10'},
  {value: 1.123456, de: '1,12', en: '1.12', cn: '1.12'},
  {value: 0.123456, de: '0,12', en: '0.12', cn: '0.12'},
  {value: 0.1, de: '0,10', en: '0.10', cn: '0.10'},
  {value: 9.1, de: '9,10', en: '9.10', cn: '9.10'}
];

const noDecimalTests = [
  {value: 123456.123456, de: '123.456', en: '123,456', cn: '123,456'},
  {value: 123.123456, de: '123', en: '123', cn: '123'},
  {value: 123.1, de: '123', en: '123', cn: '123'},
  {value: 1.123456, de: '1', en: '1', cn: '1'},
  {value: 0.123456, de: '0', en: '0', cn: '0'},
  {value: 0.1, de: '0', en: '0', cn: '0'},
  {value: 9.1, de: '9', en: '9', cn: '9'}
];

const currencyTests = [
  {value: 123456.123456, de: '123.456,123', en: '123,456.123', cn: '123,456.123'},
  {value: 123.123456, de: '123,123', en: '123.123', cn: '123.123'},
  {value: 123.1, de: '123,100', en: '123.100', cn: '123.100'},
  {value: 1.123456, de: '1,123', en: '1.123', cn: '1.123'},
  {value: 0.123456, de: '0,123', en: '0.123', cn: '0.123'},
  {value: 0.1, de: '0,100', en: '0.100', cn: '0.100'},
  {value: 9.1, de: '9,100', en: '9.100', cn: '9.100'}
];

const currencySymbolTests = [
  {value: 123456.123456, de: '123.456,123 EUR', en: 'USD 123,456.123', cn: 'CNY 123,456.123'},
  {value: 123.123456, de: '123,123 EUR', en: 'USD 123.123', cn: 'CNY 123.123'},
  {value: 123.1, de: '123,100 EUR', en: 'USD 123.100', cn: 'CNY 123.100'},
  {value: 1.123456, de: '1,123 EUR', en: 'USD 1.123', cn: 'CNY 1.123'},
  {value: 0.123456, de: '0,123 EUR', en: 'USD 0.123', cn: 'CNY 0.123'},
  {value: 0.1, de: '0,100 EUR', en: 'USD 0.100', cn: 'CNY 0.100'},
  {value: 9.1, de: '9,100 EUR', en: 'USD 9.100', cn: 'CNY 9.100'}
];

const dateTests = [
  {value: new Date(2020, 7 - 1, 15), de: '15.07.2020', en: '07/15/2020', cn: '2020/07/15'},
  {value: moment('20200715', 'YYYYMMDD'), de: '15.07.2020', en: '07/15/2020', cn: '2020/07/15'}
];

class PartNumberDialogTranslationKeys {
  /** The i18n translation keys */
  @AbstractTranslationDataService.collectTranslation('partNumber') public static readonly translationKeys = {
    partNumberDialog: {
      label: '',
      toolTip: ''
    }
  };
}

const german: Language = {
  name: 'German',
  locale: 'de',
  alternativeLocales: [],
  translationData: {}
};

const english: Language = {
  name: 'English',
  locale: 'en',
  alternativeLocales: [],
  translationData: {}
};

const chinese: Language = {
  name: 'Chinese',
  locale: 'zh-Hans',
  alternativeLocales: ['cn'],
  translationData: {}
};

const txDE = {
  i18n: {
    dateFormat: 'DD.MM.YYYY',
    dateTimeFormat: 'DD.MM.YYYY hh:mm:ss',
    noDecimalFormat: '1.0-0',
    decimalFormat: '1.2-2',
    currencyFormat: '1.3-3',
    currencySymbol: 'EUR',
    currencySymbolPosition: 'right',
    decimalCharacter: ',',
    groupingCharacter: '.'
  },
  partNumberDialog: {
    label: 'Teilenummer',
    toolTip: 'Eingabefeld Teilenummer'
  }
};

const txEN = {
  i18n: {
    dateFormat: 'MM/DD/YYYY',
    dateTimeFormat: 'MM/DD/YYYY h:mm:ss a',
    noDecimalFormat: '1.0-0',
    decimalFormat: '1.2-2',
    currencyFormat: '1.3-3',
    currencySymbol: 'USD',
    currencySymbolPosition: 'left',
    decimalCharacter: '.',
    groupingCharacter: ','
  },
  partNumberDialog: {
    label: 'Partnumber',
    toolTip: 'Input field part number'
  }
};

const txCN = {
  i18n: {
    dateFormat: 'YYYY/MM/DD',
    dateTimeFormat: 'YYYY/MM/DD h:mm:ss',
    noDecimalFormat: '1.0-0',
    decimalFormat: '1.2-2',
    currencyFormat: '1.3-3',
    currencySymbol: 'CNY',
    currencySymbolPosition: 'left',
    decimalCharacter: '.',
    groupingCharacter: ','
  },
  partNumberDialog: {
    label: '零件号',
    toolTip: '输入栏零件号'
  }
};

const translationTests = [
  {value: I18nTranslationKeys.translationKeys.i18n.dateFormat, de: 'DD.MM.YYYY', en: 'MM/DD/YYYY', cn: 'YYYY/MM/DD'},
  {value: I18nTranslationKeys.translationKeys.i18n.currencySymbol, de: 'EUR', en: 'USD', cn: 'CNY'},
  {
    value: PartNumberDialogTranslationKeys.translationKeys.partNumberDialog.label,
    de: txDE.partNumberDialog.label,
    en: txEN.partNumberDialog.label,
    cn: txCN.partNumberDialog.label
  },
  {
    value: PartNumberDialogTranslationKeys.translationKeys.partNumberDialog.toolTip,
    de: txDE.partNumberDialog.toolTip,
    en: txEN.partNumberDialog.toolTip,
    cn: txCN.partNumberDialog.toolTip
  }
];

class TestTranslationService extends AbstractTranslationService {
  public constructor(
    protected logger: LoggerService,
    protected translationDataService: AbstractTranslationDataService
  ) {
    super(logger, translationDataService);
  }

  protected getFallBackLanguage(): Language {
    return english;
  }
}

class TestTranslationDataService extends AbstractTranslationDataService {
  public constructor(protected logger: LoggerService) {
    super(logger);
  }
  public setTranslationData(language: Language, modules: string[], forceReload: boolean) {
    if (language.locale === 'de') {
      language.translationData = txDE;
    }
    if (language.locale === 'en') {
      language.translationData = txEN;
    }
    if (language.locale === 'zh-Hans') {
      language.translationData = txCN;
    }
    // console.log(language);
  }
}

let loggerService: LoggerService;
let txDataService: AbstractTranslationDataService;
let txService: AbstractTranslationService;
let txPipe: TranslationPipe;

const initializeServices = () => {
  loggerService = new LoggerService();
  txDataService = new TestTranslationDataService(loggerService);
  txService = new TestTranslationService(loggerService, txDataService);
  txPipe = new TranslationPipe(txService);
};

describe('i18n german', () => {
  initializeServices();
  it('initialize translation service', () => {
    expect(txDataService).toBeInstanceOf(AbstractTranslationDataService);
    expect(txService).toBeInstanceOf(AbstractTranslationService);
    expect(txPipe).toBeInstanceOf(TranslationPipe);
    txService.changeLanguage(german);
    expect(txService.getCurrentLanguage()).toBe(german);
  });

  it('formatting', () => {
    for (const test of dateTests) {
      expect(txService.formatDate(test.value)).toBe(test.de);
    }
    for (const test of decimalTests) {
      expect(txService.formatDecimal(test.value)).toBe(test.de);
    }
    for (const test of noDecimalTests) {
      expect(txService.formatNoDecimal(test.value)).toBe(test.de);
    }
    for (const test of currencyTests) {
      expect(txService.formatCurrency(test.value)).toBe(test.de);
    }
    for (const test of currencySymbolTests) {
      expect(txService.formatCurrency(test.value, true)).toBe(test.de);
    }
  });

  it('translating', () => {
    for (const test of translationTests) {
      expect(txPipe.transform(test.value)).toBe(test.de);
    }
  });
});

describe('i18n english', () => {
  initializeServices();
  it('initialize translation service', () => {
    expect(txDataService).toBeInstanceOf(AbstractTranslationDataService);
    expect(txService).toBeInstanceOf(AbstractTranslationService);
    expect(txPipe).toBeInstanceOf(TranslationPipe);
    txService.changeLanguage(english);
    expect(txService.getCurrentLanguage()).toBe(english);
  });

  it('formatting()', () => {
    for (const test of dateTests) {
      expect(txService.formatDate(test.value)).toBe(test.en);
    }
    for (const test of decimalTests) {
      expect(txService.formatDecimal(test.value)).toBe(test.en);
    }
    for (const test of noDecimalTests) {
      expect(txService.formatNoDecimal(test.value)).toBe(test.en);
    }
    for (const test of currencyTests) {
      expect(txService.formatCurrency(test.value)).toBe(test.en);
    }
    for (const test of currencySymbolTests) {
      expect(txService.formatCurrency(test.value, true)).toBe(test.en);
    }
  });

  it('translating', () => {
    for (const test of translationTests) {
      expect(txPipe.transform(test.value)).toBe(test.en);
    }
  });
});

describe('i18n chinese', () => {
  initializeServices();
  it('initialize translation service', () => {
    expect(txDataService).toBeInstanceOf(AbstractTranslationDataService);
    expect(txService).toBeInstanceOf(AbstractTranslationService);
    expect(txPipe).toBeInstanceOf(TranslationPipe);
    txService.changeLanguage(chinese);
    expect(txService.getCurrentLanguage()).toBe(chinese);
  });

  it('formatting()', () => {
    for (const test of dateTests) {
      expect(txService.formatDate(test.value)).toBe(test.cn);
    }
    for (const test of decimalTests) {
      expect(txService.formatDecimal(test.value)).toBe(test.cn);
    }
    for (const test of noDecimalTests) {
      expect(txService.formatNoDecimal(test.value)).toBe(test.cn);
    }
    for (const test of currencyTests) {
      expect(txService.formatCurrency(test.value)).toBe(test.cn);
    }
    for (const test of currencySymbolTests) {
      expect(txService.formatCurrency(test.value, true)).toBe(test.cn);
    }
  });

  it('translating', () => {
    for (const test of translationTests) {
      expect(txPipe.transform(test.value)).toBe(test.cn);
    }
  });
});
