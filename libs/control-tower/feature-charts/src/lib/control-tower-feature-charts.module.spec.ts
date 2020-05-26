import { async, TestBed } from '@angular/core/testing';
import { ControlTowerFeatureChartsModule } from './control-tower-feature-charts.module';

describe('ControlTowerFeatureChartsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ControlTowerFeatureChartsModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ControlTowerFeatureChartsModule).toBeDefined();
  });
});
