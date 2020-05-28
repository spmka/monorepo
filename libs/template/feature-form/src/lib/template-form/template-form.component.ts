import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'spmka-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  public templateFormGroup: FormGroup;

  public constructor() { }

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm() {}

}
