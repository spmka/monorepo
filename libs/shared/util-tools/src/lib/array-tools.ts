import * as _ from 'lodash';

/** Tools for array processing */
export class ArrayTools {
  /**
   * Returns a uniq array based on the given array;
   * @param array The array with duplicate values removed.
   */
  public static uniq<T>(array: Array<T>): Array<T> {
    return _.uniq(array);
  }

  /**
   * Add an element to an array with no duplicates.
   * The equality === is used to find duplicates.
   * @param array The array to add an element to.
   * @param element The element to add.
   */
  public static addUniq<T>(array: Array<T>, element: T): Array<T> {
    return ArrayTools.concatUniq(array, [element]);
  }

  /**
   * Concat 2 arrays with no duplicates.
   * The equality === is used to find duplicates.
   * @param array1 The first array to concat.
   * @param array2 The second array to concat.
   */
  public static concatUniq<T>(array1: Array<T>, array2: Array<T>): Array<T> {
    return _.unionWith(array1, array2, (el1, el2) => el1 === el2);
  }


  /**
   * Add an element to an array with no duplicates.
   * @param array The array to add an element to.
   * @param element The element to add.
   * @param equalComparator The comparator that defines when 2 elements of the arrays are equal.
   */
  public static addUniqWith<T>(array: Array<T>, element: T,
    equalComparator: (el1: T, el2: T) => boolean): Array<T> {
    return ArrayTools.concatUniqWith(array, [element], equalComparator);
  }

  /**
   * Concat 2 arrays with no duplicates.
   * @param array1 The first array to concat.
   * @param array2 The second array to concat.
   * @param equalComparator The comparator that defines when 2 elements of the arrays are equal.
   */
  public static concatUniqWith<T>(array1: Array<T>, array2: Array<T>,
    equalComparator: (el1: T, el2: T) => boolean): Array<T> {
    return _.unionWith(array1, array2, equalComparator);
  }

  /** Return true if array exists and has zero elements.
   * @param array The array to check for emptiness.
   */
  public static isEmpty<T>(array: Array<T>): boolean {
    return _.isEmpty(array);
  }
}
