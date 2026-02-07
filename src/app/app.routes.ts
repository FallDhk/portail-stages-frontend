import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login-component/login-component';
import {authGuard} from './core/guards/auth-guard';
import {roleGuard} from './core/role-guard';
import {MainLayoutComponent} from './core/layout/main-layout-component/main-layout-component';
import {entrepriseRoutes} from './pages/entreprise/entreprise.routes';
import {OffreListComponent} from './pages/entreprise/offres/offre-list-component/offre-list-component';
import {etudiantRoutes} from './pages/etudiant/etudiant.routes';
import {adminRoutes} from './pages/admin/admin.routes';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [

      { path: '', canActivate: [authGuard], loadComponent: () => import('./pages/dashboard-component/dashboard-component').then(m => m.DashboardComponent) },
      // { path: 'entreprise', canActivate: [roleGuard],data: { role: 'ENTREPRISE' }, loadComponent: () => import('./pages/entreprise/offres/offre-list-component/offre-list-component').then(m => m.OffreListComponent) },

      {
        path: 'entreprise',
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' },
        loadChildren: () =>
          import('./pages/entreprise/entreprise.routes').then(m => m.entrepriseRoutes)
      },
      {
        path: 'etudiant',
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' },
        loadChildren: () =>
          import('./pages/etudiant/etudiant.routes').then(m => m.etudiantRoutes)
      },
      {
        path: 'admin',
        canActivate: [roleGuard],
        data: { role: 'ADMIN' },
        loadChildren: () =>
          import('./pages/admin/admin.routes').then(m => m.adminRoutes)
      },
      {
        path: 'enseignant',
        canActivate: [roleGuard],
        data: { role: 'ENSEIGNANT' },
        loadChildren: () =>
          import('./pages/enseignant/enseignant.routes').then(m => m.enseignantRoutes)
      }
    ]
  }
  //

  // {path: 'admin',component: AdminComponent, canActivate: [roleGuard],data: { roles: ['ADMIN'] }}
  //{ path: 'dashboard', canActivate: [authGuard], loadComponent: () => import('./pages/dashboard-component/dashboard-component').then(m => m.DashboardComponent) },
];
