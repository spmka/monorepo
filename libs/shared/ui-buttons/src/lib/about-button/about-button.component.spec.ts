import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutButtonComponent } from './about-button.component';
import { MatButtonModule } from '@angular/material/button';

describe('AboutButtonComponent', () => {
  let component: AboutButtonComponent;
  let fixture: ComponentFixture<AboutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule],
      declarations: [AboutButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
