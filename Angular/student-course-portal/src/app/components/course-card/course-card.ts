import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Course } from '../../models/course.model';
import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();

  constructor(public enrollmentService: EnrollmentService) {}

  toggleEnrollment(): void {

  console.log('BUTTON CLICKED');

  if (this.enrollmentService.isEnrolled(this.course.id)) {

    console.log('Unenrolling', this.course.id);

    this.enrollmentService.unenroll(this.course.id);

  } else {

    console.log('Enrolling', this.course.id);

    this.enrollmentService.enroll(this.course.id);

    this.enrollRequested.emit(this.course.id);

  }

}

}