import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS301',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Spring Boot',
      code: 'CS302',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Java Programming',
      code: 'CS303',
      credits: 3,
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'Database Systems',
      code: 'CS304',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Computer Networks',
      code: 'CS305',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

}