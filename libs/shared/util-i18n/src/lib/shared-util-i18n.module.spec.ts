import {async, TestBed} from '@angular/core/testing';
import {SharedUtilI18nModule} from './shared-util-i18n.module';

describe('SharedUtilI18nModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilI18nModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilI18nModule).toBeDefined();
  });
});
