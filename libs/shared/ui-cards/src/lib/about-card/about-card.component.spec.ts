import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardComponent } from './about-card.component';
import { MatCardModule } from '@angular/material/card';

describe('AboutCardComponent', () => {
  let component: AboutCardComponent;
  let fixture: ComponentFixture<AboutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCardComponent],
      imports: [MatCardModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
