import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievement-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievement-dashboard.html',
  styleUrl: './achievement-dashboard.css'
})
export class AchievementDashboard {

  achievements = [

    {
      icon:'🥇',
      title:'Java Master',
      description:'Completed Java Programming'
    },

    {
      icon:'⭐',
      title:'Angular Explorer',
      description:'Completed Angular Basics'
    },

    {
      icon:'🔥',
      title:'15 Day Streak',
      description:'Learning continuously'
    }

  ];

}