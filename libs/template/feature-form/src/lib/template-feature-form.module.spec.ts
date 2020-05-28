import { async, TestBed } from '@angular/core/testing';
import { TemplateFeatureFormModule } from './template-feature-form.module';

describe('TemplateFeatureFormModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TemplateFeatureFormModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TemplateFeatureFormModule).toBeDefined();
  });
});
