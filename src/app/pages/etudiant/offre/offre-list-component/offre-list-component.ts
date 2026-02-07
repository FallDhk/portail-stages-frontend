import {ChangeDetectorRef, Component} from '@angular/core';
import {PageResponse} from '../../../../core/models/page-response.model';
import {Offre} from '../../../../core/models/offre.model';
import {OffreService} from '../../../../core/services/etudiant/offre/offre-service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-offre-list-component',
  imports: [
    RouterLink
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
    this.service.getOffres(page).subscribe(res => {
      this.pages = res;
      this.cdr.detectChanges();
    });
  }
}
