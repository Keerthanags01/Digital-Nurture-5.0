import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import {
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgClass,
  NgStyle,
  NgIf
} from '@angular/common';

import { Highlight } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
    NgIf,
    Highlight,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number | null;
    gradeStatus: string;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  enrolled = false;
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes['course']);
  }

  enroll(): void {
    this.enrolled = true;
    this.enrollRequested.emit(this.course.id);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  // Getter keeps the template clean and readable.
  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course.credits !== null && this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  getBorderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      case 'pending':
        return 'gray';
      default:
        return 'black';
    }
  }

}