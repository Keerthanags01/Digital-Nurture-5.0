import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: this.fb.control(
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.simulateEmailCheck()],
          updateOn: 'blur'
        }
      ),

      courseId: [
        '',
        [Validators.required, this.noCourseCode()]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array<FormControl<string | null>>([])

    });

  }

  // Custom synchronous validator
  noCourseCode(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      const value = control.value;

      if (value && value.toString().toUpperCase().startsWith('XX')) {
        return { noCourseCode: true };
      }

      return null;
    };

  }

  // Custom async validator
  simulateEmailCheck(): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> => {

      return new Promise(resolve => {

        setTimeout(() => {

          const email = control.value ?? '';

          if (email.includes('test@')) {
            resolve({ emailTaken: true });
          } else {
            resolve(null);
          }

        }, 800);

      });

    };

  }

  // Typed getter
  get additionalCourses(): FormArray<FormControl<string | null>> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl<string | null>>;
  }

  addCourse(): void {

    this.additionalCourses.push(
      this.fb.control('', Validators.required)
    );

  }

  removeCourse(index: number): void {

    this.additionalCourses.removeAt(index);

  }

  onSubmit(): void {

    console.log('Form Value:', this.enrollForm.value);

    // value excludes disabled controls
    console.log('Raw Value:', this.enrollForm.getRawValue());

  }

}