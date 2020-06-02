import {ObjectTools} from '@spmka/shared/util-tools';

describe('ObjectTools', () => {
  it('isEmpty()', () => {
    expect(ObjectTools.isEmpty(null)).toBeTruthy();
    expect(ObjectTools.isEmpty(undefined)).toBeTruthy();
    expect(ObjectTools.isEmpty('')).toBeTruthy();
    expect(ObjectTools.isEmpty({})).toBeTruthy();
    expect(ObjectTools.isEmpty([])).toBeTruthy();
    expect(ObjectTools.isEmpty(new Map())).toBeTruthy();

    expect(ObjectTools.isEmpty(0)).toBeFalsy();
    expect(ObjectTools.isEmpty(1)).toBeFalsy();
    expect(ObjectTools.isEmpty('A')).toBeFalsy();
    expect(ObjectTools.isEmpty(['A'])).toBeFalsy();
    expect(ObjectTools.isEmpty([0])).toBeFalsy();
    expect(ObjectTools.isEmpty({p1: 0})).toBeFalsy();
    expect(ObjectTools.isEmpty(new Map().set(0, 0))).toBeFalsy();
  });
});
