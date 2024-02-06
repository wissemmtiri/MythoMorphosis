import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services= [
    {
      "name": "Full guidance for beginners",
      "description": "New to the fitness world? Our website offers comprehensive guidance tailored for beginners. From personalized workout plans to expert advice, we'll help you kickstart your fitness journey with confidence.",
      "icon": "beginner.png"
    },
    {
      "name": "Scientific Insights",
      "description": "Stay ahead of the game with our scientific insights. Backed by research and expertise, we provide you with valuable knowledge and strategies to optimize your workouts and achieve optimal results.",
      "icon": "ScientificInsights.png"
    },
    {
      "name": "Nutrition Tracking",
      "description": "Fuel your fitness journey with our nutrition tracking feature. Easily monitor your daily intake, set nutrition goals, and make informed choices to support your fitness goals.",
      "icon": "nutrition.png"
    },
    {
      "name": "Progress Monitoring",
      "description": "Track your progress and celebrate your achievements with our progress monitoring tool. Visualize your journey, set milestones, and stay motivated as you witness your hard work paying off.",
      "icon": "ProgressMonitoring.png"
    }
  ];
}
