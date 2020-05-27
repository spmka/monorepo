import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowReturnsComponent } from './workflow-returns.component';

describe('WorkflowReturnsComponent', () => {
  let component: WorkflowReturnsComponent;
  let fixture: ComponentFixture<WorkflowReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowReturnsComponent ]
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
