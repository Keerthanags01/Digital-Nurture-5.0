import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { LoadingService } from '../../services/loading';
import { CourseService } from '../../services/course';

import { Notification } from '../../components/notification/notification';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    Notification,
    CourseSummaryWidget
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalName = 'Student Course Portal';

  greeting = '👋 Welcome Back';

  today = new Date().toDateString();

  isPortalActive = true;

  message = 'Start your learning journey today!';

  searchTerm = '';

  totalCourses = 0;

  totalStudents = 150;

  averageCGPA = 3.8;

  constructor(
    private courseService: CourseService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.totalCourses = courses.length;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  onEnrollClick(): void {

    this.message = 'Redirecting to Courses...';

  }

}