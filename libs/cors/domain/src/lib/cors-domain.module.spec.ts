import { async, TestBed } from '@angular/core/testing';
import { CorsDomainModule } from './cors-domain.module';

describe('CorsDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CorsDomainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CorsDomainModule).toBeDefined();
  });
});
