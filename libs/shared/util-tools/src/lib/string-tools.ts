// We need this extra "* as" to avoid runtime error in the StringToolsTest
import {ObjectTools} from './object-tools';

/** Tools for string processing */
export class StringTools {
  /**
   * Checks a string for emptiness. Null, undefined and '' are all empty.
   * @param text The text object to check for emptiness
   */
  public static isEmpty(text: string): boolean {
    return ObjectTools.isEmpty(text);
  }

  /**
   * Remove all blanks from a string and return the processed text.
   * @param text The text where the blanks shall be removed
   */
  public static removeBlanks(text: string): string {
    return text.replace(/ /g, '');
  }

  /**
   * Return true if the textToBeIncluded isd included in textToCheck.
   * Both texts are converted to lower case and all blanks are removed before the check.
   * @param textToCheck The text that will be checked.
   * @param textToBeIncluded The text that may be included in the text to check.
   */
  public static matchesAnywhereLowerCaseNoBlanks(textToCheck: string, textToBeIncluded: string): boolean {
    return StringTools.removeBlanks(textToCheck).toLowerCase()
      .includes(StringTools.removeBlanks(textToBeIncluded).toLowerCase());
  }

  /**
   * Replaces parameters in a text.
   * @param dataWithParameters a string containing parameters in the form {{parameterName}}
   * @param parameters an object with multiple parameters and values of the form {parameterName: parameterValue ...}
   */
  public static replaceParameters(dataWithParameters: string, parameters: any): string {
    if (dataWithParameters && parameters) {
      const propNames = Object.keys(parameters);
      propNames.forEach(propName => {
        const value = parameters[propName];
        let origString: string = null;
        while (origString !== dataWithParameters) {
          origString = dataWithParameters;
          dataWithParameters = dataWithParameters.replace('{{' + propName + '}}', value);
        }
      });
    }
    return dataWithParameters;
  }

  /** Check if a string is not longer than maxLength characters.
   * @param value The string to check
   * @param maxLength The maximum allowed length of the string
   */
  public static notLongerThan(value: string, maxLength: number): boolean {
    return (value != null) && (value.length <= maxLength);
  }
}
