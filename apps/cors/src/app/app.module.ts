import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ControlTowerFeatureHomeModule } from '@spmka/control-tower/feature-home';
import { CorsFeatureWorkflowReturnsModule } from '@spmka/cors/feature-workflow-returns';
import { SharedUiCardsModule } from '@spmka/shared/ui-cards'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SharedUiCardsModule,
    ControlTowerFeatureHomeModule,
    CorsFeatureWorkflowReturnsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
