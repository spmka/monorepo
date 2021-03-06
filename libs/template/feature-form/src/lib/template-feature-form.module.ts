import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Route} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {TemplateFormComponent} from './template-form/template-form.component';
import {SharedUtilI18nModule} from '@spmka/shared/util-i18n';
import {SharedUiBaseModule} from '@spmka/shared/ui-base';

export const templateFeatureFormRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedUtilI18nModule,
    SharedUiBaseModule
  ],
  declarations: [TemplateFormComponent],
  exports: [TemplateFormComponent]
})
export class TemplateFeatureFormModule {}
