import {ChangeDetectorRef, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SuiviService} from '../../../core/services/etudiant/suivi/suivi-service';
import {ActivatedRoute} from '@angular/router';
import {RapportService} from '../../../core/services/rapport/rapport-service';
import {SoutenanceService} from '../../../core/services/admin/soutenance/soutenance-service';

@Component({
  selector: 'app-suivi-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './suivi-component.html',
  styleUrl: './suivi-component.scss',
})
export class SuiviComponent {
  conventionId!: number;
  list: any[] = [];
  convention: any;
  loading = true;
  soutenance: any;

  total = 0;
  canAdd = false;
  statutConvention = '';

  form = {
    //titre: '',
    contenu: '',
    progression: 0
  };

  //rapport
  selectedFile!: File;
  uploading = false;
  uploadOk = false;
  errorMsg = '';
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
    //this.loadRapport();
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

      this.canAdd = this.statutConvention === 'VALIDEE_ADMIN' && this.total < 100;

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

  submit() {
    if (!this.canAdd) return;

    if (this.total + this.form.progression > 100) {
      alert('Total progression > 100%');
      return;
    }

    this.service.add(this.conventionId, this.form).subscribe(() => {
      this.form = {  contenu: '', progression: 0 };
      this.load();
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== 'application/pdf') {
      this.errorMsg = 'Veuillez sélectionner un PDF';
      return;
    }

    this.selectedFile = file;
    this.errorMsg = '';
  }

  deposerRapport() {
    if (!this.selectedFile) return;

    this.uploading = true;
    this.uploadOk = false;

    this.rapportService.deposer(this.convention.id, this.selectedFile)
      .subscribe({
        next: res => {
          this.uploading = false;
          this.uploadOk = true;
          this.cdr.detectChanges();
        },
        error: err => {
          this.uploading = false;
          this.errorMsg = 'Erreur lors du dépôt';
        }
      });

  }

}
