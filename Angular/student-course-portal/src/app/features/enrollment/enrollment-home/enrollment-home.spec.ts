import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EnrollmentHome } from './enrollment-home';

describe('EnrollmentHome', () => {

  let component: EnrollmentHome;
  let fixture: ComponentFixture<EnrollmentHome>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [EnrollmentHome],

      providers: [

        provideRouter([]),

        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentHome);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

});