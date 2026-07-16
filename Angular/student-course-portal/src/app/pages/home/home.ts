import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Notification } from '../../components/notification/notification';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  CourseSummaryWidget,
  Notification
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  // Hands-On 2 properties
  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = 'Click "Enroll Now" to continue.';

  searchTerm = '';

  // Statistics
  totalCourses = 0;
  totalStudents = 3;
  averageCGPA = 3.8;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Read course count from the singleton service
    this.totalCourses = this.courseService.getCourses().length;
  }

  onEnrollClick(): void {
    this.message = 'Enrollment request initiated!';
  }

}