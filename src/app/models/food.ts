export class Food {
    name: string;
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    imageUrl:string;
  
    constructor(name: string, calories: string, protein: string, carbs: string, fat: string, image:string) {
      this.name = name;
      this.calories = calories;
      this.protein = protein;
      this.carbs = carbs;
      this.fat = fat;
      this.imageUrl=image;
    }
  }
  