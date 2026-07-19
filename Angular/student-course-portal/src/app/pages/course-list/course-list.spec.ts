import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { CourseList } from './course-list';

describe('CourseList', () => {

  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseList],

      providers: [

        provideHttpClient(),

        provideStore({}),

        provideRouter([]),

        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParamMap: of({
              get: () => null
            }),
            snapshot: {
              queryParamMap: {
                get: () => null
              },
              paramMap: {
                get: () => null
              }
            }
          }
        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});