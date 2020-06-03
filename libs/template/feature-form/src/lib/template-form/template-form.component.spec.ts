import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TemplateFormComponent} from './template-form.component';
import {
  SharedUtilI18nModule,
  AbstractTranslationService,
  AbstractTranslationDataService
} from '@spmka/shared/util-i18n';
// TODO: Check if this tests with linking to apps make sense
import {TranslationService, TranslationDataService} from '@spmka/template/util-i18n';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatInputModule, SharedUtilI18nModule],
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
      declarations: [TemplateFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
