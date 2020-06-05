import {async, TestBed} from '@angular/core/testing';
import {SharedE2eUtilStepsModule} from './shared-e2e-util-steps.module';

describe('SharedE2eUtilStepsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedE2eUtilStepsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedE2eUtilStepsModule).toBeDefined();
  });
});
