import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';
import { FoodService } from 'src/app/services/food-service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit{
  foods: Food[]=[];
  constructor(private foodService: FoodService) {  
  }
  ngOnInit() {
    this.getFood();
  }
  getFood(){
    this.foodService.getFood().subscribe({
      next: (res) => {
        console.log(res);
        this.foods = res;
        console.log(this.foods);
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
}

