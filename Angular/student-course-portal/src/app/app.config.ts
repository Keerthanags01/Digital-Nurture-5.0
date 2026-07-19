import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';

// Interceptors
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';

// Course Store
import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';

// Enrollment Store
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(routes),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor
      ])
    ),

    // Root Store
    provideStore(),

    // Feature States
    provideState('course', courseReducer),
    provideState('enrollment', enrollmentReducer),

    // Effects
    provideEffects([
      CourseEffects
    ]),

    // Redux DevTools
    provideStoreDevtools({
      maxAge: 25
    })

  ]

};