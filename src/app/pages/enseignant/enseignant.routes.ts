import { Routes } from '@angular/router';
import {roleGuard} from '../../core/role-guard';
import {StagereListComponent} from './stagere-list-component/stagere-list-component';
import {SuiviComponent} from './suivi-component/suivi-component';

export const enseignantRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stagiaire',
        component: StagereListComponent,
        canActivate: [roleGuard],
        data: { role: 'ENSEIGNANT' }
      },
      {
        path: 'suivi/:conventionId',
        component: SuiviComponent,
        canActivate: [roleGuard],
        data: { role: 'ENSEIGNANT' }
      },

    ]
  }
];
