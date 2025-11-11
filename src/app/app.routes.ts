import { Routes } from '@angular/router';
import { PerfilAlumno } from './perfil-alumno/perfil-alumno';

export const routes: Routes = [
  { path: 'perfil-alumno', component: PerfilAlumno },
  { path: '', redirectTo: 'perfil-alumno', pathMatch: 'full' }
];
