import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocaleSwitchComponent} from './locale-switch/locale-switch.component';
import {SharedUtilI18nModule} from '@spmka/shared/util-i18n';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [CommonModule, SharedUtilI18nModule, MatButtonModule],
  declarations: [LocaleSwitchComponent],
  exports: [LocaleSwitchComponent]
})
export class TemplateFeatureLocaleSwitchModule {}
