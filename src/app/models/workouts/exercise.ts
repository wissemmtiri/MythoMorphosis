export class Exercise {
  id!: number;
  name: string;
  muscleGroup: string;
  description: string;

  constructor(id: number, name: string, muscleGroup: string, description: string) {
    this.id = id;
    this.name = name;
    this.muscleGroup = muscleGroup;
    this.description = description;
  }
}
