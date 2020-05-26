import { async, TestBed } from '@angular/core/testing';
import { SharedUiButtonsModule } from './shared-ui-buttons.module';

describe('SharedUiButtonsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiButtonsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiButtonsModule).toBeDefined();
  });
});
