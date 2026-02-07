import { Routes } from '@angular/router';
import {roleGuard} from '../../core/role-guard';
import {OffreListComponent} from './offres/offre-list-component/offre-list-component';
import {OffreCreateComponent} from './offres/offre-create-component/offre-create-component';
import {OffreEditComponent} from './offres/offre-edit-component/offre-edit-component';
import {OffreCandidaturesComponent} from './offres/offre-candidatures-component/offre-candidatures-component';
import {ConventionListComponent} from './conventions/convention-list-component/convention-list-component';
import {StagereListComponent} from './stagere/stagere-list-component/stagere-list-component';
import {StagereDetailComponent} from './stagere/stagere-detail-component/stagere-detail-component';


export const entrepriseRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'offres',
        component: OffreListComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }
      },
      {
        path: 'offres/new',
        component: OffreCreateComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }
      },
      { path: 'offres/edit/:id',
        component: OffreEditComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }
      },
      { path: 'offres/:id/candidatures',
        component: OffreCandidaturesComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }
      },
      {
        path: 'conventions',
        component: ConventionListComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }

      },
      {
        path: 'stagiaire',
        component: StagereListComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }

      },
      {
        path: 'stagiaire/:conventionId',
        component: StagereDetailComponent,
        canActivate: [roleGuard],
        data: { role: 'ENTREPRISE' }
      },
    ]
  }
];
