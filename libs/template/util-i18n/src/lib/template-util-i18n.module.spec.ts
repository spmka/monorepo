import {async, TestBed} from '@angular/core/testing';
import {TemplateUtilI18nModule} from './template-util-i18n.module';

describe('TemplateUtilI18nModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TemplateUtilI18nModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TemplateUtilI18nModule).toBeDefined();
  });
});
