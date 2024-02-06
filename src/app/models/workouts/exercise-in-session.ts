import { Exercise } from "./exercise";
import { Session } from "./session";

export class ExerciseInSession {
  id: number;
  reps: number;
  sets: number;
  weight: number;
  exercise: Exercise; 

  constructor(id: number, reps: number, sets: number, weight: number, exercise: Exercise) {
    this.id = id;
    this.reps = reps;
    this.sets = sets;
    this.weight = weight;
    this.exercise = exercise;
  }
}
