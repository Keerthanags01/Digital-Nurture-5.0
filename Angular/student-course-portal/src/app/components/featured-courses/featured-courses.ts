import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-courses.html',
  styleUrl: './featured-courses.css'
})
export class FeaturedCourses {

  courses = [

    {
      title:'Java Programming',
      icon:'☕',
      level:'Intermediate',
      duration:'12 Weeks',
      rating:'★★★★☆'
    },

    {
      title:'Angular',
      icon:'🅰',
      level:'Beginner',
      duration:'8 Weeks',
      rating:'★★★★★'
    },

    {
      title:'Spring Boot',
      icon:'🌱',
      level:'Advanced',
      duration:'10 Weeks',
      rating:'★★★★☆'
    }

  ];

}