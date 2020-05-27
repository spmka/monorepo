import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCardComponent } from './about-card/about-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AboutCardComponent],
  exports: [AboutCardComponent],
})
export class SharedUiCardsModule {}
