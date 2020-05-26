import { async, TestBed } from '@angular/core/testing';
import { SharedUtilTextModule } from './shared-util-text.module';

describe('SharedUtilTextModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilTextModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilTextModule).toBeDefined();
  });
});
