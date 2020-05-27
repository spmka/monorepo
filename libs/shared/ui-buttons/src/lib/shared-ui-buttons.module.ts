import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AboutButtonComponent } from './about-button/about-button.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [AboutButtonComponent],
  exports: [AboutButtonComponent],
})
export class SharedUiButtonsModule { }
