import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';

import { AboutCardComponent } from './about-card/about-card.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [AboutCardComponent],
  exports: [AboutCardComponent],
})
export class SharedUiCardsModule {}
