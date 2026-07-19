import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { CourseService } from '../../services/course';
import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css'
})
export class CourseDetail implements OnInit {

  course?: Course;

  students: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

    this.route.paramMap.pipe(

      // switchMap cancels the previous HTTP request whenever
      // a new courseId is received, preventing outdated responses.
      switchMap(params => {

        const id = Number(params.get('id'));

        return this.courseService.getCourseById(id);

      })

    ).subscribe({

      next: (course) => {

        this.course = course;

        this.enrollmentService
          .getStudentsByCourse(course.id)
          .subscribe({

            next: (students) => {
              this.students = students;
            },

            error: (err) => {
              console.error(err);
            }

          });

      },

      error: (err) => {
        console.error('Failed to load course:', err);
      }

    });

  }

}