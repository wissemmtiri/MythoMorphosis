import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/models/workouts/workout-plan';
import { PlansService } from 'src/app/services/plans-service';

@Component({
  selector: 'app-workoutplans',
  templateUrl: './workoutplans.component.html',
  styleUrls: ['./workoutplans.component.css']
})
export class WorkoutplansComponent implements OnInit {
  beginner_workoutplans !:WorkoutPlan[];
  intermediate_workoutplans !:WorkoutPlan[];
  advanced_workoutplans !:WorkoutPlan[];

  constructor(private plansService: PlansService) {  
  }
  ngOnInit() {
    this.getBeginnerPlans();
    this.getIntermediatePlans();
    this.getAdvancesPlans();
  }
  getBeginnerPlans(){
    this.plansService.getPlansByLevel('beginner').subscribe({
      next: (res) => {
        this. beginner_workoutplans = res;
        console.log(this. beginner_workoutplans);
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
  getIntermediatePlans(){
    this.plansService.getPlansByLevel('intermediate').subscribe({
      next: (res) => {
        this. intermediate_workoutplans = res;
        console.log(this. intermediate_workoutplans);
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
  getAdvancesPlans(){
    this.plansService.getPlansByLevel('advanced').subscribe({
      next: (res) => {
        this. advanced_workoutplans = res;
        console.log(this. advanced_workoutplans);
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
}

