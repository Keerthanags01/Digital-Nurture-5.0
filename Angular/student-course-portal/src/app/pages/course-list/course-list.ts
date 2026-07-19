import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCard
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  searchTerm = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {

    console.log('CourseList Loaded');

    this.courses$ = this.store.select(selectAllCourses);

    this.courses$.subscribe(data => {
      console.log('Courses from Store:', data);
    });

    console.log('Dispatching Load Courses');

    this.store.dispatch(loadCourses());

    const search = this.route.snapshot.queryParamMap.get('search');

    if (search) {
      this.searchTerm = search;
    }
  }

  openCourse(course: Course): void {
    this.router.navigate(['courses', course.id]);
  }

  searchCourse(): void {
    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );
  }

}