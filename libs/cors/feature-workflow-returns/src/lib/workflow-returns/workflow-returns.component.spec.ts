import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowReturnsComponent } from './workflow-returns.component';
import { CorsFeatureHomeModule } from '@spmka/cors/feature-home';

describe('WorkflowReturnsComponent', () => {
  let component: WorkflowReturnsComponent;
  let fixture: ComponentFixture<WorkflowReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CorsFeatureHomeModule],
      declarations: [WorkflowReturnsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
