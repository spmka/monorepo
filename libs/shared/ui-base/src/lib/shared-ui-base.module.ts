import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { KeysDirective } from './keys.directive';

@NgModule({
  declarations: [KeysDirective],
  imports: [CommonModule],
  exports: [KeysDirective]
})
export class SharedUiBaseModule {}
