import {Language} from '@spmka/shared/util-i18n';

export const german: Language = {
  name: 'German',
  locale: 'de',
  alternativeLocales: [],
  translationData: {}
};

export const english: Language = {
  name: 'English',
  locale: 'en',
  alternativeLocales: [],
  translationData: {}
};

export const txDemoDataEN = {
  localeSwitch: {
    buttons: {
      english: 'English',
      german: 'German'
    }
  },
  templateForm: {
    numberInput: {
      text: 'This is a normal input field, the label will move up when you enter a value',
      placeholder: 'Enter a number'
    },
    emailInput: {
      text: 'This is an input field with validation, an error message is shown if no value is given or a wrong email is entered',
      placeholder: 'Enter your email',
      errorMessageEmpty: 'You must enter a value',
      errorMessageWrong: 'Not a valid email'
    }
  }
};

export const txDemoDataDE = {
  localeSwitch: {
    buttons: {
      english: 'Englisch',
      german: 'Deutsch'
    }
  },
  templateForm: {
    numberInput: {
      text: 'Dies ist ein normales Eingabefeld, der Label wandert nach oben wenn sie einen Wert eingeben',
      placeholder: 'Geben sie eine Zahl ein'
    },
    emailInput: {
      text: 'Dies ist ein Eingabefeld mit Validierung, eine Fehlermeldung erschein nach der Eingab einer ungültigen Adresse',
      placeholder: 'Geben sie ihre email ein',
      errorMessageEmpty: 'Sie müssen einen Wert eingeben',
      errorMessageWrong: 'Die ist keine gültige Adresse'
    }
  }
};
