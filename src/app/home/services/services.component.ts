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
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ullamcorper arcu. Donec gravida nisl vitae erat auctor, luctus aliquam urna scelerisque. Ut efficitur posuere nulla, quis efficitur quam finibus vel. Nunc egestas eros at nisl dapibus, eu pellentesque ex pretium. Integer facilisis orci eu ornare vestibulum.",
      "icon": "beginner.png"
    },
    {
      "name": "Scientific Insights",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ullamcorper arcu. Donec gravida nisl vitae erat auctor, luctus aliquam urna scelerisque. Ut efficitur posuere nulla, quis efficitur quam finibus vel. Nunc egestas eros at nisl dapibus, eu pellentesque ex pretium. Integer facilisis orci eu ornare vestibulum.",
      "icon": "ScientificInsights.png"
    },
    {
      "name": "Nutrition Tracking",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ullamcorper arcu. Donec gravida nisl vitae erat auctor, luctus aliquam urna scelerisque. Ut efficitur posuere nulla, quis efficitur quam finibus vel. Nunc egestas eros at nisl dapibus, eu pellentesque ex pretium. Integer facilisis orci eu ornare vestibulum.",
      "icon": "nutrition.png"
    },
    {
      "name": "Progress Monitoring",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ullamcorper arcu. Donec gravida nisl vitae erat auctor, luctus aliquam urna scelerisque. Ut efficitur posuere nulla, quis efficitur quam finibus vel. Nunc egestas eros at nisl dapibus, eu pellentesque ex pretium. Integer facilisis orci eu ornare vestibulum.",
      "icon": "ProgressMonitoring.png"
    }
  ];
}
