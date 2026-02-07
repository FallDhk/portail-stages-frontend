import {ChangeDetectorRef, Component} from '@angular/core';
import {ConventionService} from '../../../../core/services/entreprise/convention/convention-service';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-convention-list-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './convention-list-component.html',
  styleUrl: './convention-list-component.scss',
})
export class ConventionListComponent {
  list: any[] = [];
  loading = true;

  //tuteurForms: Record<number, FormGroup> = {};

  tuteurForms: any = {};

  constructor(
    private service: ConventionService,
    private fb: FormBuilder, private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.loading = true;
    this.service.getByEntreprise().subscribe(res => {
      this.list = res;
      this.list.forEach(c => {
        this.tuteurForms[c.id] = this.fb.group({
          tuteur: [c.tuteur || '', Validators.required],
        });
      });
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  assignTuteur(id: number) {
    const value = this.tuteurForms[id].value;
    this.service.assignTuteur(id, value.tuteur).subscribe(() => {
      this.load();
    });
  }

  signer(id: number) {
    this.service.signerEntreprise(id).subscribe(
      {
        next: res => {
          this.load();
        },
        error: err => {
          console.error(err.error.error);
        }
      }

    );
  }

  openPdf(id: number) {
    this.service.getPdf(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}
