import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanDetailService } from 'src/app/services/plan-detail';
import { WorkoutplansComponent } from '../workoutplans/workoutplans.component';
import { WorkoutPlan } from 'src/app/models/workouts/workout-plan';
import { PlansService } from 'src/app/services/plans-service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent implements OnInit{
  workout_test = {
    "level": "Beginner",
    "frequency": 3,
    "duration": 7,
    "Sessions": [
      { 
        "muscleGroup": "Chest",
        "url": "chest",
        "exercises": [
          "Bench Press",
          "Push ups",
          "Exercise 3",
          "Exercise 1",
          "Exercise 2",
          "Exercise 3"
        ]
      },
      {
        "muscleGroup": "Back",
        "url": "back",
        "exercises": [
          "Deadlift",
          "Seated Cable Rows",
          "Exercise 3",
          "Exercise 1",
          "Exercise 2",
          "Exercise 3"
        ]
      },
      {
        "muscleGroup": "Legs",
        "url": "legs",
        "exercises": [
          "Squats",
          "Leg Extension",
          "Exercise 3",
          "Exercise 1",
          "Exercise 2",
          "Exercise 3"
        ]
      }
    ]
  }
  workoutDetails!: WorkoutPlan;
  id: string = this.route.snapshot.params['id'];

  constructor(private planDetailService: PlanDetailService, private route: ActivatedRoute, private planService :PlansService){}
  ngOnInit(){
    return this.getWorkoutDetail();
  }
  getWorkoutDetail(){
    this.planDetailService.getPlanDetailById(parseInt(this.id, 10)).subscribe({
      next: (res) => {
        console.log(res);
        this.workoutDetails= res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  startWorkout(id:number){
    this.planService.choosePlan(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}