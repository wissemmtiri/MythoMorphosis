import { Session } from "./session";

export class WorkoutPlan {
  id: number;
  level: string;
  title: string;
  description: string;
  duration: number;
  frequency: number;
  sessions: Session[];

  constructor(id: number, level: string, title: string, description: string, duration: number, frequency: number, sessions: Session[]) {
    this.id = id;
    this.level = level;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.frequency = frequency;
    this.sessions = sessions;
  }
}
