/**
 * Tools to replace property string property values of an object by their structure keys.
 * This must be plain typescript code with no other library access, because it must be runnable in cypress tests!
 */

export class StructureKeyTools {
  /**
   * Replaces all property values of an object by a structure string that can be used as a key.
   * Example:
   *   {a: '', b: {c: '', d: ''}}
   *   will be modified to:
   *   {a: 'a' b: {c: 'a.b.c', d: 'a.b.d'}}
   * @param obj the object to modify.
   * @param parentKey the parent key of the obj to construct the structure.
   * @param combineChar The char that is used to combine the structure parts of the structure key.
   */
  public static replacePropertyValuesByStructureKeys(obj: object, parentKey: string = '', combineChar: string = '.') {
    for (const propertyName in obj) {
      if (obj.hasOwnProperty(propertyName)) {
        const propertyValue = obj[propertyName];
        if (typeof propertyValue === 'object') {
          StructureKeyTools.replacePropertyValuesByStructureKeys(
            propertyValue, parentKey === '' ? propertyName : parentKey + combineChar + propertyName, combineChar);
        } else if ((typeof propertyValue === 'string') && (propertyValue === '')) {
          obj[propertyName] = parentKey + combineChar + propertyName;
        }
      }
    }
  }

  /** Decorator function to generate form ids. */
  public static generateFormIds() {
    return (target, propertyName) => StructureKeyTools.replacePropertyValuesByStructureKeys(
      target[propertyName], propertyName, '-');
  }

    /** Decorator function to generate translation ids. */
    public static generateTxIds() {
      return (target, propertyName) => StructureKeyTools.replacePropertyValuesByStructureKeys(
        target[propertyName], propertyName, '.');
    }
}
