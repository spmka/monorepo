import { async, TestBed } from '@angular/core/testing';
import { SharedUtilObjectsModule } from './shared-util-objects.module';

describe('SharedUtilObjectsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUtilObjectsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUtilObjectsModule).toBeDefined();
  });
});
