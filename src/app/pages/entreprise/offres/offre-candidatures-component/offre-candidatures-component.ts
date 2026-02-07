import {ChangeDetectorRef, Component} from '@angular/core';
import {OffreService} from '../../../../core/services/entreprise/offres/offre-service';
import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offre-candidatures-component',
  imports: [CommonModule],
  templateUrl: './offre-candidatures-component.html',
  styleUrl: './offre-candidatures-component.scss',
})
export class OffreCandidaturesComponent {

  list: any[] = [];
  id!: number;
  loading = true;

  constructor(
    private service: OffreService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  load() {
    this.loading = true;

    this.service.getCandidatures(this.id).subscribe({
      next: res => {
        this.list = res;
        this.loading = false;
        this.cdr.detectChanges();

      },
      error: err => {
        console.error(err);
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  accepter(id: number) {
    if (!confirm('Accepter cette candidature ?')) return;

    this.service.accepterCandidature(id).subscribe(() => {
      this.load();
    });
  }

  refuser(id: number) {
    if (!confirm('Refuser cette candidature ?')) return;

    this.service.refuserCandidature(id).subscribe(() => {
      this.load();
    });
  }
}
