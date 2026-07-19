import { TestBed } from '@angular/core/testing';

import { unsavedChangesGuard } from './unsaved-changes-guard';
import { ReactiveEnrollmentForm } from '../pages/reactive-enrollment-form/reactive-enrollment-form';

describe('unsavedChangesGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should return true when form is not dirty', () => {

    const component = {
      enrollForm: {
        dirty: false
      }
    } as ReactiveEnrollmentForm;

    const result = TestBed.runInInjectionContext(() =>
      unsavedChangesGuard(component, {} as any, {} as any, {} as any)
    );

    expect(result).toBeTrue();

  });

});