import { Component } from '@angular/core';
import { AbstractTranslationService } from '@spmka/shared/util-i18n';
import { english, german } from '../core/i18n/translation.config';
import { AppTranslationKeys } from './app.config-tx';

@Component({
  selector: 'spmka-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public txIds = AppTranslationKeys.translationKeys.app.buttons;

  public constructor(private txService: AbstractTranslationService) {}

  public onSetEnglish() {
    this.txService.changeLanguage(english);
  }

  public onSetGerman() {
    this.txService.changeLanguage(german);
  }
}
