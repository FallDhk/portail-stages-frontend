import { Routes } from '@angular/router';
import {roleGuard} from '../../core/role-guard';
import {ConventionListComponent} from './conventions/convention-list-component/convention-list-component';
import {StageListComponent} from './stage-list-component/stage-list-component';
import {SuiviComponent} from './suivi-component/suivi-component';
import {OffreListComponent} from './offre/offre-list-component/offre-list-component';
import {OffreDetailComponent} from './offre/offre-detail-component/offre-detail-component';
import {CandidatureListComponent} from './candidature/candidature-list-component/candidature-list-component';
import {CvComponent} from './cv/cv-component/cv-component';

export const etudiantRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'offres',
        component: OffreListComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }

      },
      {
        path: 'offres/:offreId',
        component: OffreDetailComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }
      },
      {
        path: 'conventions',
        component: ConventionListComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }

      },
      {
        path: 'stages',
        component: StageListComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }
      },
      {
        path: 'suivi/:conventionId',
        component: SuiviComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }
      },
      {
        path: 'candidature',
        component: CandidatureListComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }
      },
      {
        path: 'cv',
        component: CvComponent,
        canActivate: [roleGuard],
        data: { role: 'ETUDIANT' }
      },




    ]
  }
];
