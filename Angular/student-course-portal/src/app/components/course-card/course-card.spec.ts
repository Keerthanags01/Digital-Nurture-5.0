import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseCard } from './course-card';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

describe('CourseCard', () => {

  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let enrollmentService: jasmine.SpyObj<EnrollmentService>;

  beforeEach(async () => {

    enrollmentService = jasmine.createSpyObj(
      'EnrollmentService',
      ['isEnrolled', 'enroll', 'unenroll']
    );

    enrollmentService.isEnrolled.and.returnValue(false);

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        {
          provide: EnrollmentService,
          useValue: enrollmentService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should display course name', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    } as Course;

    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(heading.textContent).toContain('Data Structures');

  });

  it('should emit enrollRequested when button is clicked', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    } as Course;

    spyOn(component.enrollRequested, 'emit');

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));

    button.nativeElement.click();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);

  });

  it('should call enroll service when button is clicked', () => {

    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    } as Course;

    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('button'))
      .nativeElement.click();

    expect(enrollmentService.enroll).toHaveBeenCalledWith(1);

  });

});