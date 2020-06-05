import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';

import {
  AbstractTranslationService,
  AbstractTranslationDataService,
  SharedUtilI18nModule
} from '@spmka/shared/util-i18n';
import {TemplateFeatureFormModule} from '@spmka/template/feature-form';
import {TemplateFeatureLocaleSwitchModule} from '@spmka/template/feature-locale-switch';
import {TranslationService, TranslationDataService} from '@spmka/template/util-i18n';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], {initialNavigation: 'enabled'}),
    TemplateFeatureFormModule,
    TemplateFeatureLocaleSwitchModule,
    MatButtonModule,
    SharedUtilI18nModule
  ],
  providers: [
    {
      provide: AbstractTranslationService,
      useExisting: TranslationService
    },
    {
      provide: AbstractTranslationDataService,
      useExisting: TranslationDataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
