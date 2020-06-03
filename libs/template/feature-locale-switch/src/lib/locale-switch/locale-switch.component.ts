import {Component} from '@angular/core';
import {LocaleSwitchFormIds} from './locale-switch.config-form';
import {LocaleSwitchTranslationKeys} from './locale-switch.config-tx';
import {AbstractTranslationService} from '@spmka/shared/util-i18n';
import {english, german} from '@spmka/template/util-i18n';

@Component({
  selector: 'spmka-locale-switch',
  templateUrl: './locale-switch.component.html',
  styleUrls: ['./locale-switch.component.scss']
})
export class LocaleSwitchComponent {
  /** Ids for the buttons */
  public formIds = LocaleSwitchFormIds.localeSwitch.buttons;
  /** translation keys */
  public txIds = LocaleSwitchTranslationKeys.translationKeys.localeSwitch.buttons;

  /**
   * Constructor.
   * @param txService the injected translation service.
   */
  public constructor(private txService: AbstractTranslationService) {}

  /** Called when button english is clicked */
  public onSetEnglish() {
    this.txService.changeLanguage(english);
  }

  /** Called when button german is clicked */
  public onSetGerman() {
    this.txService.changeLanguage(german);
  }
}
