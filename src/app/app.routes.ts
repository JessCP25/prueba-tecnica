import { Routes } from '@angular/router';
import { isUserGuard } from './prueba-1/guards/is-user.guard';

export const routes: Routes = [
  {
    path: 'personal',
    loadComponent: () =>
      import('./prueba-1/components/personal/personal.component').then(
        (c) => c.PersonalComponent
      ),
  },
  {
    path: 'family',
    loadComponent: () =>
      import('./prueba-1/components/family/family.component').then(
        (c) => c.FamilyComponent
      ),
    canActivate: [isUserGuard],
  },
  {
    path: 'academic',
    loadComponent: () =>
      import('./prueba-1/components/academic/academic.component').then(
        (c) => c.AcademicComponent
      ),
    canActivate: [isUserGuard],
  },
  {
    path: '**',
    redirectTo: 'personal',
  },
];
