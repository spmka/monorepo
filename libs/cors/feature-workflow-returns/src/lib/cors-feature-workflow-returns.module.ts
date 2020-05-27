import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { WorkflowReturnsComponent } from './workflow-returns/workflow-returns.component';

import { CorsFeatureHomeModule } from '@spmka/cors/feature-home';

export const corsFeatureWorkflowReturnsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, CorsFeatureHomeModule],
  declarations: [WorkflowReturnsComponent],
  exports: [WorkflowReturnsComponent],
})
export class CorsFeatureWorkflowReturnsModule {}
