import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const controlTowerFeatureHomeRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class ControlTowerFeatureHomeModule {}
