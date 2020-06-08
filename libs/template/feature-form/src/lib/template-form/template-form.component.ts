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
  /** Ids for form controls */
  public formIds = TemplateInputFormIds.inputForm;
  /** Translation keys */
  public txIds = TemplateFormTranslationKeys.translationKeys.templateForm;

  /**
   * Constructor.
   * @param txService the injected translation service.
   */
  public constructor(private txService: AbstractTranslationService) {
    super();
  }

  /** Angular life cycle method */
  public ngOnInit(): void {
    super.ngOnInit();
    this.createForm();
  }

  /**
   * Method for email input field validation.
   * @param controlName the controls name to check.
   */
  public getEmailErrorMessage(controlName: string) {
    return this.getControl(controlName).hasError('required')
      ? this.txService.translate(this.txIds.emailInput.errorMessageEmpty)
      : this.getControl(controlName).hasError('email')
      ? this.txService.translate(this.txIds.emailInput.errorMessageWrong)
      : '';
  }

  /** Creates the controls for the form */
  private createForm() {
    this.addEmptyControl(this.formIds.numberInput);
    this.addEmptyControl(this.formIds.emailInput).setValidators(Validators.email);
  }
}
