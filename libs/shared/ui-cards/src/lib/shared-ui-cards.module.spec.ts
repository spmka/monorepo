import { async, TestBed } from '@angular/core/testing';
import { SharedUiCardsModule } from './shared-ui-cards.module';

describe('SharedUiCardsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiCardsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiCardsModule).toBeDefined();
  });
});
