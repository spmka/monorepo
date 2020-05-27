import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ControlTowerFeatureHomeModule } from '@spmka/control-tower/feature-home';
import { SharedUiCardsModule } from '@spmka/shared/ui-cards';
import { SharedUiButtonsModule } from '@spmka/shared/ui-buttons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    ControlTowerFeatureHomeModule,
    SharedUiCardsModule,
    SharedUiButtonsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
