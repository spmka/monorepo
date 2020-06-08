import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LocaleSwitchComponent} from './locale-switch.component';
import {MatButtonModule} from '@angular/material/button';
import {SharedUtilI18nModule, AbstractTranslationService, AbstractTranslationDataService} from '@spmka/shared/util-i18n';
import {TemplateUtilI18nModule, TranslationService, TranslationDataService} from '@spmka/template/util-i18n';
import { SharedUiBaseModule } from '@spmka/shared/ui-base';

describe('LocaleSwitchComponent', () => {
  let component: LocaleSwitchComponent;
  let fixture: ComponentFixture<LocaleSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, SharedUtilI18nModule, SharedUiBaseModule, TemplateUtilI18nModule],
      declarations: [LocaleSwitchComponent],
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
