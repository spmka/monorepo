import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TemplateFormComponent } from './template-form/template-form.component';

export const templateFeatureFormRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatInputModule],
  declarations: [TemplateFormComponent],
  exports: [TemplateFormComponent],
})
export class TemplateFeatureFormModule { }
