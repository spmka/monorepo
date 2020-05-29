import { StructureKeyTools } from './structure-key-tools';
import { ObjectTools } from './object-tools';

describe('StructureKeyTools', () => {
  const orgObj = {
    p1: '',
    o1: {
      p1: '',
      p2: '',
      o1: {
        p1: '',
        p2: '',
      },
    },
    p2: '',
  };

  it('replacePropertyValuesByStructureKeys', () => {
    const resultObj1 = {
      p1: '.p1',
      o1: {
        p1: 'o1.p1',
        p2: 'o1.p2',
        o1: {
          p1: 'o1.o1.p1',
          p2: 'o1.o1.p2',
        },
      },
      p2: '.p2',
    };
    const resultObj2 = {
      p1: 'result.p1',
      o1: {
        p1: 'result.o1.p1',
        p2: 'result.o1.p2',
        o1: {
          p1: 'result.o1.o1.p1',
          p2: 'result.o1.o1.p2',
        },
      },
      p2: 'result.p2',
    };
    const testObj1 = ObjectTools.cloneDeep(orgObj);
    StructureKeyTools.replacePropertyValuesByStructureKeys(testObj1, '', '.');
    // console.log(testObj1);
    expect(ObjectTools.isEqual(testObj1, resultObj1)).toBeTruthy();

    const testObj2 = ObjectTools.cloneDeep(orgObj);
    StructureKeyTools.replacePropertyValuesByStructureKeys(
      testObj2,
      'result',
      '.'
    );
    // console.log(testObj2);
    expect(ObjectTools.isEqual(testObj2, resultObj2)).toBeTruthy();
  });

  class FormIdsTestClass {
    @StructureKeyTools.generateFormIds()
    public static formIds = ObjectTools.cloneDeep(orgObj);
  }

  it('generateFormIds', () => {
    const formIds = {
      p1: 'formIds-p1',
      o1: {
        p1: 'formIds-o1-p1',
        p2: 'formIds-o1-p2',
        o1: {
          p1: 'formIds-o1-o1-p1',
          p2: 'formIds-o1-o1-p2'
        }
      },
      p2: 'formIds-p2',
    };
    // console.log(FormIdsTestClass.formIds);
    expect(ObjectTools.isEqual(FormIdsTestClass.formIds, formIds)).toBeTruthy();
  });

  class TxIdsTestClass {
    @StructureKeyTools.generateTxIds()
    public static txIds = ObjectTools.cloneDeep(orgObj);
  }

  it('generateTxIds', () => {
    const txIds = {
      p1: 'txIds.p1',
      o1: {
        p1: 'txIds.o1.p1',
        p2: 'txIds.o1.p2',
        o1: {
          p1: 'txIds.o1.o1.p1',
          p2: 'txIds.o1.o1.p2'
        }
      },
      p2: 'txIds.p2',
    };
    // console.log(TxIdsTestClass.txIds);
    expect(ObjectTools.isEqual(TxIdsTestClass.txIds, txIds)).toBeTruthy();
  });
});
