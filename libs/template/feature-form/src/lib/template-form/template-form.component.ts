import {Component, OnInit} from '@angular/core';
import {Validators} from '@angular/forms';
import {TemplateInputFormIds} from './template-form.config-form';
import {BaseFormComponent} from '@spmka/shared/ui-base';
import {TemplateFormTranslationKeys} from './template-form.config-tx';
import {AbstractTranslationService} from '@spmka/shared/util-i18n';

@Component({
  selector: 'spmka-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent extends BaseFormComponent implements OnInit {
  public formIds = TemplateInputFormIds.templateInputFormIds;
  public txIds = TemplateFormTranslationKeys.translationKeys.templateForm;

  public constructor(private txService: AbstractTranslationService) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.createForm();
  }

  /**
   * Method for E-mail input field validation.
   * @param controlName the controls name to check.
   */
  public getEmailErrorMessage(controlName: string) {
    return this.getControl(controlName).hasError('required')
      ? this.txService.translate(this.txIds.emailInput.errorMessageEmpty)
      : this.getControl(controlName).hasError('email')
      ? this.txService.translate(this.txIds.emailInput.errorMessageWrong)
      : '';
  }

  private createForm() {
    this.addEmptyControl(this.formIds.input);
    this.addEmptyControl(this.formIds.email).setValidators(Validators.email);
  }
}
