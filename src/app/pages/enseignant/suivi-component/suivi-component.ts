import {ChangeDetectorRef, Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SuiviService} from '../../../core/services/etudiant/suivi/suivi-service';
import {ActivatedRoute} from '@angular/router';
import {ConventionService} from '../../../core/services/enseignant/convention/convention-service';
import {RapportService} from '../../../core/services/rapport/rapport-service';
import {DatePipe} from '@angular/common';
import {SoutenanceService} from '../../../core/services/admin/soutenance/soutenance-service';

@Component({
  selector: 'app-suivi-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './suivi-component.html',
  styleUrl: './suivi-component.scss',
})
export class SuiviComponent {
  isEncadrant = true;
  commentaires: any = {};

  conventionId!: number;
  list: any[] = [];
  convention: any;
  loading = true;

  total = 0;

  rapport: any = null;
  soutenance: any;

  constructor(
    private service: SuiviService,
    private serviceCon: ConventionService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private rapportService: RapportService,
    private serviceSoutenance: SoutenanceService,
  ) {}

  ngOnInit() {
    this.conventionId = Number(this.route.snapshot.paramMap.get('conventionId'));
    this.load();
  }
  load() {
    this.loading = true;
    this.service.getByConvention(this.conventionId).subscribe(res => {
      this.list = res.suivis || res;
      this.service.getConvation(this.conventionId).subscribe(cov => {
        this.convention = cov;
        this.cdr.detectChanges();
      });

      this.total = this.list.reduce((s, x) => s + x.progression, 0);

      this.serviceSoutenance.getByConvention(this.conventionId).subscribe(s => {
        this.soutenance = s;
        this.cdr.detectChanges();
      });
      this.loading = false;
      this.loadRapport();
      this.cdr.detectChanges();
    });
  }

  validerSuivi(s: any) {
    const commentaire = this.commentaires[s.id] || '';

    this.serviceCon.validerSuivi(s.id, commentaire).subscribe(
      {
        next: res => {
          this.load();
        },
        error: err => {
          console.error(err);
        }
      }
    );
  }

  loadRapport() {

    this.rapportService.getRapportByConvention(this.conventionId)
      .subscribe(res => {
        this.rapport = res;
        this.cdr.detectChanges();
      });
  }

  valider(id: number) {
    this.rapportService.valider(id).subscribe(() => {
      const r = this.list.find(x => x.id === id);
      if (r) r.valideEncadrant = true;
      //this.cdr.detectChanges();
      this.load();
    });
  }
}
