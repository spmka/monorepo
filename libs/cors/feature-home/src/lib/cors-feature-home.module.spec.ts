import { async, TestBed } from '@angular/core/testing';
import { CorsFeatureHomeModule } from './cors-feature-home.module';

describe('CorsFeatureHomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CorsFeatureHomeModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CorsFeatureHomeModule).toBeDefined();
  });
});
