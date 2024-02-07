import { Exercise } from "./exercise";
import { ExerciseInSession } from "./exercise-in-session";


export class Session {
  id!: number;
  name: string; 
  exercises: ExerciseInSession[]; 
  constructor(id: number, name: string, exercises: ExerciseInSession[]) {
    this.id = id;
    this.name = name;
    this.exercises = exercises;
  }
}
