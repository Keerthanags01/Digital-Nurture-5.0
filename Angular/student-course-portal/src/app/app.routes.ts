import { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

  // Login Page (Landing Page)
  {
    path: '',
    component: Login
  },

  // Dashboard / Home
  {
    path: 'home',
    component: Home
  },

  // Courses
  {
    path: 'courses',
    component: CoursesLayout,
    children: [

      {
        path: '',
        component: CourseList
      },

      {
        path: ':id',
        component: CourseDetail
      }

    ]
  },

  // Enrollment Module
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment-routing-module')
        .then(m => m.ENROLLMENT_ROUTES)
  },

  // Student Profile
  {
    path: 'profile',
    canActivate: [authGuard],
    component: StudentProfile
  },

  // Not Found
  {
    path: '**',
    component: NotFound
  }

];