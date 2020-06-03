import {async, TestBed} from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {SharedUtilI18nModule} from '@spmka/shared/util-i18n';
import {TemplateFeatureLocaleSwitchModule} from './template-feature-locale-switch.module';

describe('TemplateFeatureLocaleSwitchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TemplateFeatureLocaleSwitchModule, SharedUtilI18nModule, MatButtonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TemplateFeatureLocaleSwitchModule).toBeDefined();
  });
});
