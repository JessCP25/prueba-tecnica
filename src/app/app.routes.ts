import { Routes } from '@angular/router';

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
  },
  {
    path: 'academic',
    loadComponent: () =>
      import('./prueba-1/components/academic/academic.component').then(
        (c) => c.AcademicComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'personal',
  },
];
