import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { CourseCard } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId?: number;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    console.log('CourseList Loaded');

    setTimeout(() => {

      this.courses = this.courseService.getCourses();

      this.isLoading = false;

    }, 1000);

  }

  onEnroll(courseId: number): void {

    console.log(courseId);

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}