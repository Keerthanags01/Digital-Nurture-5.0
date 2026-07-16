import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentHome } from './enrollment-home';

describe('EnrollmentHome', () => {
  let component: EnrollmentHome;
  let fixture: ComponentFixture<EnrollmentHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
