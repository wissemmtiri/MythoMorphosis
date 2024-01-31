import { Component } from '@angular/core';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.component.html',
  styleUrls: ['./workout-details.component.css']
})
export class WorkoutDetailsComponent {
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
}
