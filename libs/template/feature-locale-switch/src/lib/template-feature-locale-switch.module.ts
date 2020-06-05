import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {LocaleSwitchComponent} from './locale-switch/locale-switch.component';
import {SharedUtilI18nModule} from '@spmka/shared/util-i18n';
import {SharedUiBaseModule} from '@spmka/shared/ui-base';

@NgModule({
  imports: [CommonModule, SharedUtilI18nModule, MatButtonModule, SharedUiBaseModule],
  declarations: [LocaleSwitchComponent],
  exports: [LocaleSwitchComponent]
})
export class TemplateFeatureLocaleSwitchModule {}
