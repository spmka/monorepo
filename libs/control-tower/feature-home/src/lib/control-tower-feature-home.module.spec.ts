import { async, TestBed } from '@angular/core/testing';
import { ControlTowerFeatureHomeModule } from './control-tower-feature-home.module';

describe('ControlTowerFeatureHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ControlTowerFeatureHomeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ControlTowerFeatureHomeModule).toBeDefined();
  });
});
