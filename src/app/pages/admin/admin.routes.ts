import { Routes } from '@angular/router';
import {roleGuard} from '../../core/role-guard';
import {ConventionListComponent} from './conventions/convention-list-component/convention-list-component';
import {SoutenanceListComponent} from './soutenance/soutenance-list-component/soutenance-list-component';
import {SoutenanceDetailComponent} from './soutenance/soutenance-detail-component/soutenance-detail-component';
import {UtilisateurComponent} from './utilisateur/utilisateur-component/utilisateur-component';
import {UtilisateurCreateComponent} from './utilisateur/utilisateur-create-component/utilisateur-create-component';

export const adminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'conventions',
        component: ConventionListComponent,
        canActivate: [roleGuard],
        data: { role: 'ADMIN' }

      },
      {
        path: 'stage',
        component: SoutenanceListComponent,
        canActivate: [roleGuard],
        data: { role: 'ADMIN' }

      },
      {
        path: 'soutenances/:id',
        component: SoutenanceDetailComponent,
        canActivate: [roleGuard],
        data: { role: 'ADMIN' }

      },
      {
        path: 'users',
        component: UtilisateurComponent,
        canActivate: [roleGuard],
        data: { role: 'ADMIN' }

      },
      {
        path: 'users/new',
        component: UtilisateurCreateComponent,
        canActivate: [roleGuard],
        data: { role: 'ADMIN' }

      }

    ]
  }
];
