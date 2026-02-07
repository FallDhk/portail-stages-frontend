import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SoutenanceService} from '../../../../core/services/admin/soutenance/soutenance-service';
import {SuiviService} from '../../../../core/services/etudiant/suivi/suivi-service';
import {RapportService} from '../../../../core/services/rapport/rapport-service';

@Component({
  selector: 'app-soutenance-detail-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './soutenance-detail-component.html',
  styleUrl: './soutenance-detail-component.scss',
})
export class SoutenanceDetailComponent {
  convention: any;
  form: any = {
    dateSoutenance: '',
    salle: '',
    jury: ''
  };
  rapport: any = null;
  list: any[] = [];
  conventionId!: number;
  loading = true;
  soutenance: any;
  note!: number;

  constructor(private route: ActivatedRoute,
              private service: SoutenanceService,
              private serviceService: SuiviService,
              private rapportService: RapportService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.conventionId = Number(this.route.snapshot.paramMap.get('id'));
    this.load();
  }

  load() {
    this.loading = true;
    this.serviceService.getByConvention(this.conventionId).subscribe(res => {
        this.list = res.suivis || res;
        this.convention = res[0].convention;

      this.service.getByConvention(this.conventionId).subscribe(s => {
        this.soutenance = s;
        this.note = s?.noteFinale;
        this.cdr.detectChanges();
      });

        this.loading = false;
        this.loadRapport();
        this.cdr.detectChanges();
    });
  }

  planifier() {
    this.service.planifier(this.convention.id, this.form).subscribe(() => {
      this.load();
    });
  }

  loadRapport() {
    this.rapportService.getRapportByConvention(this.convention.id)
      .subscribe(res => {
        this.rapport = res;
        this.cdr.detectChanges();
      });
  }

  noter() {
    this.service.noter(this.soutenance.id, this.note).subscribe(res => {
      //this.soutenance = res;
      this.load();
    });
  }

  valider() {
    this.service.valider(this.soutenance.id).subscribe(res => {
      //this.soutenance = res;
      this.load();
    });
  }
}
