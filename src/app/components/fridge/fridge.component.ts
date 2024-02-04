import { Component } from '@angular/core';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent {
  foods = [
    {
      'name': "Food 1",
      "details": {
        "calories": "100",
        "protein": "10",
        "carbs": "20",
        'fat': '5'
      }
    },
    {
      'name': "Food 2",
      "details": {
        "calories": "200",
        "protein": "20",
        "carbs": "40",
        'fat': '10'
      }
    },
    {
      'name': "Food 3",
      "details": {
        "calories": "300",
        "protein": "30",
        "carbs": "60",
        'fat': '15'
      }
    },
    {
      'name': "Food 4",
      "details": {
        "calories": "400",
        "protein": "40",
        "carbs": "80",
        'fat': '20'
      }
    },
    {
      'name': "Food 5",
      "details": {
        "calories": "500",
        "protein": "50",
        "carbs": "100",
        'fat': '25'
      }
    },
    {
      'name': "Food 6",
      "details": {
        "calories": "600",
        "protein": "60",
        "carbs": "120",
        'fat': '30'
      }
    },
    {
      'name': "Food 7",
      "details": {
        "calories": "700",
        "protein": "70",
        "carbs": "140",
        'fat': '35'
      }
    },
    {
      'name': "Food 8",
      "details": {
        "calories": "800",
        "protein": "80",
        "carbs": "160",
        'fat': '40'
      }
    },
    {
      'name': "Food 9",
      "details": {
        "calories": "900",
        "protein": "90",
        "carbs": "180",
        'fat': '45'
      }
    },
    {
      'name': "Food 10",
      "details": {
        "calories": "1000",
        "protein": "100",
        "carbs": "200",
        'fat': '50'
      }
    },
    {
      'name': "Food 11",
      "details": {
        "calories": "1100",
        "protein": "110",
        "carbs": "220",
        'fat': '55'
      }
    },
    {
      'name': "Food 12",
      "details": {
        "calories": "1100",
        "protein": "110",
        "carbs": "220",
        'fat': '55'
      }
    }
  ]
}
