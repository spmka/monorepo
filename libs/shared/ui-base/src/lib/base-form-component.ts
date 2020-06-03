import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {BaseComponent} from './base-component';
import {Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

/** Type for a valueChanges callback */
type ValueChangeCallback = (value) => void;

/** The base component for form based components */
export class BaseFormComponent extends BaseComponent {

  /** Constructor. */
  public constructor() {
    super();
    this.setDefaultFormGroup(new FormGroup({}));
  }
  /** All methods can operate also on this form -> must be set if it should be a different one. */
  public defaultFormGroup: FormGroup;

  /**
   * Adds a value change listener to the control, that is triggered after a debounce time and only if the new
   * and returns the created subscription.
   * @param control The control to add the listener.
   * @param valueChangeListener The value change listener callback.
   * @param debounceTimeMs The optional debounce time in ms.
   */
  public static addDistinctDebounceChangeListener(control: FormControl,
    valueChangeListener: (newValue: any) => void, debounceTimeMs: number = 500): Subscription {
    return control.valueChanges.pipe(debounceTime(debounceTimeMs), distinctUntilChanged())
      .subscribe(newValue => valueChangeListener(newValue));
  }

  /**
   * Returns true if the form is valid, false otherwise.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public isFormValid(formGroup: FormGroup = this.defaultFormGroup): boolean {
    return formGroup.valid;
  }

  /** Resets the form and all errors */
  public resetForm() {
    this.defaultFormGroup.reset({}, {onlySelf: false, emitEvent: false});
    this.defaultFormGroup.markAsUntouched();
    this.defaultFormGroup.markAsPristine();
  }

  /** Returns the default form */
  public getDefaultForm(): FormGroup {
    return this.defaultFormGroup;
  }

  /**
   * Set the default form to operate on.
   * @param defaultFormGroup the formGroup to set as the default formGroup.
   */
  protected setDefaultFormGroup(defaultFormGroup: FormGroup) {
    this.defaultFormGroup = defaultFormGroup;
    this.subscriptions.sink = this.defaultFormGroup.valueChanges
      .subscribe(changes => this.onFormValueChanges(changes));
  }

  /**
   * Get a controls value directly from the form.
   * @param controlName The controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected getFormValue(controlName: string, formGroup: FormGroup = this.defaultFormGroup): any {
    return formGroup.value[controlName];
  }

  /**
   * Get a controls value by name.
   * @param controlName The controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public getControlValue(controlName: string, formGroup: FormGroup = this.defaultFormGroup): any {
    return formGroup.get(controlName).value;
  }

  /**
   * Returns a controls values length by name.
   * @param controlName The controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public getControlValueLength(controlName: string, formGroup: FormGroup = this.defaultFormGroup): number {
    const control = formGroup.get(controlName);
    return control.value ? control.value.length : 0;
  }

  /**
   * Set a controls value by the controls name.
   * @param controlName The controls name.
   * @param value The value to set for the control
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public setControlValue(controlName: string, value: any, formGroup: FormGroup = this.defaultFormGroup): any {
    return formGroup.get(controlName).setValue(value);
  }

  /**
   * Clear a text controls value by the controls name.
   * @param controlName The controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public clearTextControlValue(controlName: string, formGroup: FormGroup = this.defaultFormGroup): any {
    return formGroup.get(controlName).setValue('');
  }

  /**
   * Get a controls by name.
   * @param controlName The controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  public getControl(controlName: string, formGroup: FormGroup = this.defaultFormGroup): AbstractControl {
    return formGroup.get(controlName);
  }

  /**
   * Add an empty control to a form and return the control.
   * @param controlName the controls name
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected addEmptyControl(controlName: string, formGroup: FormGroup = this.defaultFormGroup): FormControl {
    const control = new FormControl('');
    formGroup.addControl(controlName, control);
    return control;
  }

  /**
   * Add an empty control and return the control.
   * A value change listener is added to the control, that is triggered when the value changes.
   * @param controlName The name of the control.
   * @param valueChangeCallback The value change listener callback.
   */
  protected addEmptyControlWithChangeCallback(controlName: string,
    valueChangeCallback: (newValue: any) => void): FormControl {
    const control = this.addEmptyControl(controlName);
    this.subscriptions.sink = control.valueChanges.subscribe(newValue => valueChangeCallback(newValue));
    return control;
  }

  /**
   * Add an empty control and return the control.
   * A value change listener is added to the control, that is triggered after a debounce time and only if the new
   * value differs from the previous value.
   * @param controlName The name of the control.
   * @param valueChangeCallback The value change listener callback.
   * @param debounceTimeMs The optional debounce time in ms.
   */
  protected addEmptyControlWithDistinctDebounceChangeCallback(controlName: string,
    valueChangeCallback: (newValue: any) => void, debounceTimeMs: number = 500): FormControl {
    const control = this.addEmptyControl(controlName);
    this.subscriptions.sink = control.valueChanges.pipe(debounceTime(debounceTimeMs), distinctUntilChanged())
      .subscribe(newValue => valueChangeCallback(newValue));
    return control;
  }

  /**
   * Adds a value change callback (subscribes to valueChanges) to the given control.
   * The subscription is recorded and will automatically be unsubscribed in ngOnDestroy.
   * @param control the form control to add the callback to.
   * @param callback the callback to add.
   */
  protected addValueChangeCallback(control: FormControl, callback: ValueChangeCallback): AbstractControl {
    this.subscriptions.sink = control.valueChanges.subscribe(value => callback(value));
    return control;
  }

  /**
   * Adds a value change callback (subscribes to valueChanges) to the control with the given name.
   * The subscription is recorded and will automatically be unsubscribed in ngOnDestroy.
   * @param controlName the name of the form control to add the callback to.
   * @param callback the callback to add.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected addValueChangeCallbackByName(controlName: string, callback: ValueChangeCallback,
    formGroup: FormGroup = this.defaultFormGroup): AbstractControl {
    const control = formGroup.get(controlName);
    this.subscriptions.sink = control.valueChanges.subscribe(value => callback(value));
    return control;
  }

  /**
   * Returns true if a control exists.
   * @param controlName the controls name.
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected existsControl(controlName: string, formGroup: FormGroup = this.defaultFormGroup): boolean {
    return formGroup.get(controlName) !== null;
  }

  /**
   * Returns the errors of the control if it exists or null if there are no errors or control does not exist
   * @param controlName The name of the control
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected getControlErrors(controlName: string, formGroup: FormGroup = this.defaultFormGroup): ValidationErrors {
    if (this.existsControl(controlName, formGroup)) {
      return this.getControl(controlName).errors;
    } else {
      return null;
    }
  }

  /** Called when changes happen in the default form, can be overwritten */
  protected onFormValueChanges(changes: any) {
  }

  /**
   * Sets errors for a control.
   * @param controlName The name of the control
   * @param errors the errors to set
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected setControlErrors(controlName: string, errors: ValidationErrors, formGroup: FormGroup = this.defaultFormGroup) {
    this.getControl(controlName, formGroup).setErrors(errors);
  }

  /**
   * Clears errors for a control.
   * @param controlName The name of the control
   * @param formGroup the optional formGroup, if not given the default formGroup is used.
   */
  protected clearControlErrors(controlName: string, formGroup: FormGroup = this.defaultFormGroup) {
    this.getControl(controlName, formGroup).setErrors(null);
  }
}
