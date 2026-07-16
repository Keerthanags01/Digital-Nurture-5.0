import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { Home } from './pages/home/home';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { CoursesLayout } from './pages/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';
export const routes: Routes = [

  {
    path: '',
    component: Home
  },

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

  {
  path: 'enroll',
  canActivate: [authGuard],
  loadChildren: () =>
    import('./features/enrollment/enrollment-routing-module')
      .then(m => m.ENROLLMENT_ROUTES)
},

  {
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfile
},

  {
    path: '**',
    component: NotFound
  }
];