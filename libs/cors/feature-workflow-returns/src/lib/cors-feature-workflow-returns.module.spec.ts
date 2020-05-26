import { async, TestBed } from '@angular/core/testing';
import { CorsFeatureWorkflowReturnsModule } from './cors-feature-workflow-returns.module';

describe('CorsFeatureWorkflowReturnsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CorsFeatureWorkflowReturnsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CorsFeatureWorkflowReturnsModule).toBeDefined();
  });
});
