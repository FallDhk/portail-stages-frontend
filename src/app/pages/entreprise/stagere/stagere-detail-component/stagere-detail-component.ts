import {ChangeDetectorRef, Component} from '@angular/core';
import {SuiviService} from '../../../../core/services/etudiant/suivi/suivi-service';
import {ActivatedRoute} from '@angular/router';
import {RapportService} from '../../../../core/services/rapport/rapport-service';
import {SoutenanceService} from '../../../../core/services/admin/soutenance/soutenance-service';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-stagere-detail-component',
  imports: [
    DatePipe,
    FormsModule
  ],
  templateUrl: './stagere-detail-component.html',
  styleUrl: './stagere-detail-component.scss',
})
export class StagereDetailComponent {
  conventionId!: number;
  list: any[] = [];
  convention: any;
  loading = true;
  soutenance: any;

  total = 0;
  statutConvention = '';
  rapport: any = null;

  constructor(
    private service: SuiviService,
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
      this.statutConvention = res.statutConvention || 'VALIDEE_ADMIN';
      this.total = this.list.reduce((s, x) => s + x.progression, 0);
      console.log(this.convention)
      this.loading = false;

      this.serviceSoutenance.getByConvention(this.conventionId).subscribe(s => {
        this.soutenance = s;
        this.cdr.detectChanges();
      });


      this.loadRapport();
      this.cdr.detectChanges();

    });
  }

  loadRapport() {
    this.rapportService.getRapportByConvention(this.conventionId)
      .subscribe(res => {
        this.rapport = res;
        this.cdr.detectChanges();
      });
  }
}
