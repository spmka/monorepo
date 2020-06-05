import {async, TestBed} from '@angular/core/testing';
import {SharedE2eUtilToolsModule} from './shared-e2e-util-tools.module';

describe('SharedE2eUtilToolsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedE2eUtilToolsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedE2eUtilToolsModule).toBeDefined();
  });
});
