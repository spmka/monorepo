/** Defines a language */
export interface Language {
  /** the name of the language */
  name: string;
  /** the locale id of the language */
  locale: string;
  /** alternative locales */
  alternativeLocales: Array<string>;
  /** the translation data */
  translationData: any;
}

/** a list of languages */
export type LanguageList = Array<Language>;
