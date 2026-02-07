import {ChangeDetectorRef, Component} from '@angular/core';
import {OffreService} from '../../../../core/services/entreprise/offres/offre-service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {PageResponse} from '../../../../core/models/page-response.model';
import {Offre} from '../../../../core/models/offre.model';

@Component({
  selector: 'app-offre-list-component',
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './offre-list-component.html',
  styleUrl: './offre-list-component.scss',
})
export class OffreListComponent {
  page = 0;
  size = 2;

  pages: PageResponse<Offre> | null = null;

  constructor(private service: OffreService, private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit() {
    this.load();
  }
  load(page: number = 0) {
    this.service.getMine(page).subscribe(res => {
      this.pages = res;
      this.cdr.detectChanges();
    });
  }


  edit(id: number) {
    this.router.navigate(['/entreprise/offres/edit', id]);
  }

  candidatures(id: number) {
    this.router.navigate(['/entreprise/offres', id, 'candidatures']);
  }

  remove(id: number) {
    if (!confirm('Supprimer cette offre ?')) return;

    this.service.delete(id).subscribe(() => {
      this.load();
    });
  }

}
