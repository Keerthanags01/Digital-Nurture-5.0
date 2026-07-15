import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    { id: 1, name: 'Angular', code: 'CS301', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Spring Boot', code: 'CS302', credits: 4, gradeStatus: 'pending' },
    { id: 3, name: 'Java Programming', code: 'CS303', credits: 3, gradeStatus: 'failed' },
    { id: 4, name: 'Database Systems', code: 'CS304', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Computer Networks', code: 'CS305', credits: 4, gradeStatus: 'pending' }
  ];

  selectedCourseId?: number;

  ngOnInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);

  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by reusing existing DOM
  // elements instead of recreating them on every update.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}