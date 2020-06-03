import {StructureKeyTools} from '@spmka/shared/util-tools';

/** Constants for input field identification */
export class LocaleSwitchFormIds {
  @StructureKeyTools.generateFormIds() public static localeSwitch = {
    buttons: {
      german: '',
      english: ''
    }
  };
}
