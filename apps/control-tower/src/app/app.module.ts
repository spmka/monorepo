import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { SharedUiCardsModule } from '@spmka/shared/ui-cards';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SharedUiCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
