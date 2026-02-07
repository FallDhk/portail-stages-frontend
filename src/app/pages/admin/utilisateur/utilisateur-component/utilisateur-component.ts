import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {UtilisateurService} from '../../../../core/services/admin/utilisateur/utilisateur-service';

@Component({
  selector: 'app-utilisateur-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './utilisateur-component.html',
  styleUrl: './utilisateur-component.scss',
})
export class UtilisateurComponent {
  list: any[] = [];
  loading = true;

  constructor(private service: UtilisateurService,private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.service.getusers().subscribe(res => {
      this.list = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getBadge(role: string) {

    if (role === 'ENTREPRISE') {

        return { text: 'ENTREPRISE', class: 'pending' };
    }
    if (role === 'ETUDIANT') {
        return { text: 'ETUDIANT', class: 'warning' };
    }
    if (role === 'ENSEIGNANT') {
      return { text: 'ENSEIGNANT', class: 'info' };
    }
    return { text: 'ADMIN', class: 'accepted' };

  }


}
