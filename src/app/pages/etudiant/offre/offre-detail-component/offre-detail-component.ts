import {ChangeDetectorRef, Component} from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {OffreService} from '../../../../core/services/etudiant/offre/offre-service';
import {CvService} from '../../../../core/services/etudiant/cv/cv-service';


@Component({
  selector: 'app-offre-detail-component',
  imports: [],
  templateUrl: './offre-detail-component.html',
  styleUrl: './offre-detail-component.scss',
})
export class OffreDetailComponent {
  offer: any;
  loading = true;
  alreadyApplied = false;
  cv = false;
  myCandidature: any;
  constructor(
    private service: OffreService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private serviceCv: CvService,
  ) {}
  offreId!: number;
  ngOnInit() {
    this.offreId = Number(this.route.snapshot.paramMap.get('offreId'));
    this.load();
  }

  load() {
    this.loading = true;
    this.service.showOffre(this.offreId).subscribe(res => {
      this.offer = res;
      this.serviceCv.getCv().subscribe(C => {
        this.cv = true;
        this.cdr.detectChanges();
      });

      this.loading = false;
      this.checkApplied();
      this.cdr.detectChanges();
      });
  }
  postuler(){
    this.service.postuler(this.offreId).subscribe(res => {
      this.cdr.detectChanges();
      this.load();
    });
  }
  checkApplied() {
    this.service.getMyCandidature(this.offreId).subscribe({
      next: res => {
        this.myCandidature = res;
        this.alreadyApplied = true;

        console.log(this.myCandidature);
        this.cdr.detectChanges();
      },
      error: () => {
        this.alreadyApplied = false;
      }
    });
  }
}
