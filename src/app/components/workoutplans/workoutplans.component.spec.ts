import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutplansComponent } from './workoutplans.component';

describe('WorkoutplansComponent', () => {
  let component: WorkoutplansComponent;
  let fixture: ComponentFixture<WorkoutplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutplansComponent]
    });
    fixture = TestBed.createComponent(WorkoutplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
