import { async, TestBed } from '@angular/core/testing';
import { ControlTowerDomainModule } from './control-tower-domain.module';

describe('ControlTowerDomainModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ControlTowerDomainModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ControlTowerDomainModule).toBeDefined();
  });
});
