import {StructureKeyTools} from '@spmka/shared/util-tools';

/** Constants for input field identification */
export class TemplateInputFormIds {
  @StructureKeyTools.generateFormIds() public static inputForm = {
    input: '',
    email: ''
  };
}
