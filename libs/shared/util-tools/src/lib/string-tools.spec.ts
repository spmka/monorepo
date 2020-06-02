import {StringTools} from '@spmka/shared/util-tools';

describe('StringTools', () => {
  it('isEmpty()', () => {
    const validCases = [
      '',         /* empty string */
      null,       /* null string value */
      undefined  /* undefined string value */
    ];
    const inValidCases = [
      '1234',         /* string with numbers */
      'abcd',         /* string with letters */
      '!#<>',         /* string with special characters */
      '\t\t\t\t',     /* string with tabs */
      '    ',         /* string with spaces */
      'null',         /* 'null' string value */
      'undefined'     /* 'undefined' string value */
    ];

    for (const val of validCases) {
      expect(StringTools.isEmpty(val)).toBeTruthy();
    }
    for (const val of inValidCases) {
      expect(StringTools.isEmpty(val)).toBeFalsy();
    }
  });

  it('replaceParameters()', () => {
    expect(StringTools.replaceParameters('', {maxDigits: 6})).toBe('');
    expect(StringTools.replaceParameters(null, {maxDigits: 6})).toBe(null);
    expect(StringTools.replaceParameters(undefined, {maxDigits: 6})).toBe(undefined);
    expect(StringTools.replaceParameters('Enter a maximum of 6 digits', null)).toBe('Enter a maximum of 6 digits');
    expect(StringTools.replaceParameters('Enter a maximum of 6 digits', undefined)).toBe('Enter a maximum of 6 digits');
    expect(StringTools.replaceParameters('Enter a maximum of {{maxDigits}} digits', {maxDigits: 6})).toBe('Enter a maximum of 6 digits');
    expect(StringTools.replaceParameters('Enter a maximum of {{maxDigits}} digits (max: {{maxDigits}})', {maxDigits: 6}))
      .toBe('Enter a maximum of 6 digits (max: 6)');
    expect(StringTools.replaceParameters('Enter a maximum of {{maxDigits}} digits (current: {{currentDigits}})',
      {maxDigits: 6, currentDigits: 2})).toBe('Enter a maximum of 6 digits (current: 2)');
    expect(StringTools.replaceParameters('Enter a maximum of {{maxDigits}} digits ({{currentDigits}}/{{maxDigits}})',
      {maxDigits: 6, currentDigits: 2})).toBe('Enter a maximum of 6 digits (2/6)');

  });

});
