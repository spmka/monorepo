import * as _ from 'lodash';

/** function type */
type cloneFunction = (value: object) => object;
/** function type */
type defaultsFunction = (toObj: object, ...fromObjs: Array<object>) => object;
/** function type */
type getPropertyValueFunction = (obj: object, propertyPathName: string, defaultValue?: any) => object;
/** function type */
type setPropertyValueFunction = (obj: object, propertyPathName: string, value: any) => object;

/**
 * Object tools.
 */
export class ObjectTools {
  /** isUndefined method */
  public static readonly isUndefined = _.isUndefined;
  /** isNull method */
  public static readonly isNull = _.isNull;
  /** isNumber method */
  public static readonly isNumber = _.isNumber;
  /** isString method */
  public static readonly isString = _.isString;
  /** isObject method */
  public static readonly isObject = _.isObject;
  /** isArray method */
  public static readonly isArray = _.isArray;
  /** isEqual method */
  public static readonly isEqual = _.isEqual;
  /** merge method */
  public static readonly merge = _.merge;
  /** clone method */
  public static readonly clone: cloneFunction = _.clone;
  /** cloneDeep method */
  public static readonly cloneDeep: cloneFunction = _.cloneDeep;
  /** defaults method */
  public static readonly copyNotExistingProperties: defaultsFunction = _.defaults;
  /** defaultsFunction method */
  public static readonly setProperties: defaultsFunction = _.assign;
  /** assign method */
  public static readonly getPropertyValue: getPropertyValueFunction = _.get;
  /** setPropertyValue method */
  public static readonly setPropertyValue: setPropertyValueFunction = _.set;
  /** uniq method */
  public static readonly removeDuplicates = _.uniq;
  /** isPlainObject method */
  public static readonly isPlainObject = _.isPlainObject;
  /** keys method */
  public static readonly getPropertyNames = _.keys;


  /**
   * Returns the first property name of an object.
   * @param obj the object to get the first property name from.
   */
  public static getFirstPropertyName(obj: object): string {
    const propertyNames = _.keys(obj);
    return propertyNames ? propertyNames[0] : '';
  }

  /**
   * Copy not existing properties in toObj from the given from objects.
   * @param toObj the object to copy non existing properties into.
   * @param fromObjs the objects to copy properties from.
   */
  public static copyNotExistingPropertiesFlat(toObj: object, ...fromObjs: Array<object>): object {
    fromObjs.forEach(fromObj => {
      for (const property of Object.keys(fromObj)) {
        const propertyValue = fromObj[property];
        if (_.isObject(propertyValue) && !_.isArray(propertyValue)) {
          this.copyNotExistingPropertiesFlat(toObj, propertyValue);
        } else if (!_.isArray(propertyValue)) {
          toObj[property] = propertyValue;
        }
      }
    });
    return toObj;
  }

  /**
   * Copy existing properties in toObj from the given from objects.
   * @param toObj the object to copy existing properties into.
   * @param fromObjs the objects to copy properties from.
   */
  public static copyExistingProperties(toObj: object, ...fromObjs: Array<object>): object {
    for (const property of Object.keys(toObj)) {
      fromObjs.forEach(from => {
        if (!_.isUndefined(from[property])) {
          toObj[property] = from[property];
        }
      });
    }
    return toObj;
  }

  /**
   * Returns true if the given value is empty (undefined, null, '' or {}).
   * @param value the value to test.
   * @returns true if the given object is empty (undefined, null or {}), false otherwise.
   */
  public static isEmpty(value: any): boolean {
    if ((value === undefined) || (value === null) || (value === '')) {
      return true;
    } else if (_.isObject(value)) {
      return _.isEmpty(value);
    }
    return false;
  }

  /**
   * Transfers values from one object to another.
   * @param fromObj the object to read the property values from.
   * @param toObj the object to set the property values.
   * @param transferProperties the structure that describes the transfer {fromPropertyName: 'ToPropertyName'}
   *        Example: {partName: 'product.part.name'} -> toObj.product.part.name = fromObj.partName
   */
  public static transferValues(fromObj: object, toObj: object, transferProperties: object) {
    for (const fromPropertyName of Object.keys(transferProperties)) {
      const value = ObjectTools.getPropertyValue(fromObj, fromPropertyName);
      ObjectTools.setPropertyValue(toObj, transferProperties[fromPropertyName], value);
    }
  }

}
