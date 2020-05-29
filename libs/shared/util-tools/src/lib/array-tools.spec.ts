import { ArrayTools } from './array-tools';

describe('ArrayTools', () => {

  it('uniq', () => {
    const newArray = ArrayTools.uniq([1, 2, 2, 3, 3]);
    expect(newArray.length).toBe(3);
    expect(newArray.includes(1)).toBeTruthy();
    expect(newArray.includes(2)).toBeTruthy();
    expect(newArray.includes(3)).toBeTruthy();
  });

  it('addUniq', () => {
    const newArray = ArrayTools.addUniq([1, 2, 3], 2);
    expect(newArray.length).toBe(3);
    expect(newArray.includes(1)).toBeTruthy();
    expect(newArray.includes(2)).toBeTruthy();
    expect(newArray.includes(3)).toBeTruthy();
  });

  it('concatUniq', () => {
    const newArray = ArrayTools.concatUniq([1, 2, 3], [1, 2, 3, 4, 5]);
    expect(newArray.length).toBe(5);
    expect(newArray.includes(1)).toBeTruthy();
    expect(newArray.includes(2)).toBeTruthy();
    expect(newArray.includes(3)).toBeTruthy();
    expect(newArray.includes(4)).toBeTruthy();
    expect(newArray.includes(5)).toBeTruthy();
  });

  it('addUniqWith', () => {
    const newArray = ArrayTools.addUniqWith(['A', 'b', 'C'], 'c', (el1, el2) => el1.toLowerCase() === el2.toLowerCase());
    expect(newArray.length).toBe(3);
    expect(newArray.includes('A')).toBeTruthy();
    expect(newArray.includes('b')).toBeTruthy();
    expect(newArray.includes('C')).toBeTruthy();
  });

  it('concatUniqWith', () => {
    const newArray = ArrayTools.concatUniqWith(['A', 'b', 'C'], ['c', 'd', 'a'], (el1, el2) => el1.toLowerCase() === el2.toLowerCase());
    expect(newArray.length).toBe(4);
    expect(newArray.includes('A')).toBeTruthy();
    expect(newArray.includes('b')).toBeTruthy();
    expect(newArray.includes('C')).toBeTruthy();
    expect(newArray.includes('d')).toBeTruthy();
  });

  it('isEmpty', () => {
    expect(ArrayTools.isEmpty(['A', 'b', 'C'])).toBeFalsy();
    expect(ArrayTools.isEmpty([])).toBeTruthy();
    expect(ArrayTools.isEmpty(undefined)).toBeTruthy();
    expect(ArrayTools.isEmpty(null)).toBeTruthy();
  });

});
