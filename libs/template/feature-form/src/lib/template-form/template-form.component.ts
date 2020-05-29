import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { TemplateInputFormIds } from './template-form.config-form';
import { BaseFormComponent } from '@spmka/shared/ui-base';

@Component({
  selector: 'spmka-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent extends BaseFormComponent implements OnInit {
  public formIds = TemplateInputFormIds.templateInputFormIds;

  public ngOnInit(): void {
    super.ngOnInit();
    this.createForm();
  }

    /**
   * Method for E-mail input field validation.
   * @param controlName the controls name to check.
   */
  public getEmailErrorMessage(controlName: string) {
    return this.getControl(controlName).hasError('required') ? 'You must enter a value' :
      this.getControl(controlName).hasError('email') ? 'Not a valid email' : '';
  }

  private createForm() {
    this.addEmptyControl(this.formIds.input);
    this.addEmptyControl(this.formIds.email).setValidators(Validators.email);
    this.addEmptyControl(this.formIds.emailWithError).setValidators(Validators.email);
    this.getControl(this.formIds.emailWithError).setValue('dummy.com');
    // trigger validation to show error message:
    this.getControl(this.formIds.emailWithError).markAsTouched();
    this.addEmptyControl(this.formIds.inputReadOnly).setValue('$ 437.39');
    this.addEmptyControl(this.formIds.inputReadOnlyNoContent);
    this.addEmptyControl(this.formIds.inputDisabled).setValue('$ 437.39');
    this.getControl(this.formIds.inputDisabled).disable();
    this.addEmptyControl(this.formIds.inputDisabledNoContent);
    this.getControl(this.formIds.inputDisabledNoContent).disable();
  }

}
