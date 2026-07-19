import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placement-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placement-dashboard.html',
  styleUrl: './placement-dashboard.css'
})
export class PlacementDashboard {

  skills = [

    {
      name: 'Java',
      progress: 90
    },

    {
      name: 'Angular',
      progress: 70
    },

    {
      name: 'Spring Boot',
      progress: 65
    },

    {
      name: 'Git & GitHub',
      progress: 100
    },

    {
      name: 'SQL',
      progress: 80
    }

  ];

  overall = 81;

}