import { Component, OnInit } from '@angular/core';
import { WorkoutPlan } from 'src/app/models/workouts/workout-plan';
import { PlansService } from 'src/app/services/plans-service';
import { ProfileService } from 'src/app/services/profile-service';

@Component({
  selector: 'app-log-session',
  templateUrl: './log-session.component.html',
  styleUrls: ['./log-session.component.css']
})
export class LogSessionComponent implements OnInit {
  workoutPlan!: WorkoutPlan;
  constructor(private profileService: ProfileService) {
    
  }
  ngOnInit(): void {
    this.getWorkoutPlan();
  }
  
  getWorkoutPlan(){
    this.profileService.getWorkoutPlan().subscribe({
      next: (res) => {
        console.log(res);
        this.workoutPlan= res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
