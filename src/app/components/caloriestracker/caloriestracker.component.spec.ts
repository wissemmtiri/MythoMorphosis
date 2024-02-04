import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriestrackerComponent } from './caloriestracker.component';

describe('CaloriestrackerComponent', () => {
  let component: CaloriestrackerComponent;
  let fixture: ComponentFixture<CaloriestrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaloriestrackerComponent]
    });
    fixture = TestBed.createComponent(CaloriestrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
