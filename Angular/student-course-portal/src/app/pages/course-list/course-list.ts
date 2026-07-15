import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [NgFor, NgIf, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { id: 1, name: 'Angular', code: 'CS301', credits: 4 },
    { id: 2, name: 'Spring Boot', code: 'CS302', credits: 4 },
    { id: 3, name: 'Java Programming', code: 'CS303', credits: 3 },
    { id: 4, name: 'Database Systems', code: 'CS304', credits: 3 },
    { id: 5, name: 'Computer Networks', code: 'CS305', credits: 4 }
  ];

  selectedCourseId?: number;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

}