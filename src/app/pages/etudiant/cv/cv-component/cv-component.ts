import {ChangeDetectorRef, Component} from '@angular/core';
import {CvService} from '../../../../core/services/etudiant/cv/cv-service';
import {FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-component',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.scss',
})
export class CvComponent {
  loading = true;
  cv:any;
  form!: FormGroup;

  constructor(private service: CvService,  private cdr: ChangeDetectorRef,private fb: FormBuilder) {
    this.form = this.fb.group({
      adresse: ['', Validators.required],
      anneeUniversitaire: ['', Validators.required],
      competences: ['', Validators.required],
      etablissement: ['', Validators.required],
      filiere: ['', Validators.required],
      matricule: ['', Validators.required],
      niveau: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getCv().subscribe(res => {
     this.cv = res;
      this.form.patchValue(res);
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.service.saveOrUpdate(this.form.value).subscribe(
      {
        next: res => {
          this.load();
        },
        error: err => {
          console.error(err);
        }
      });
  }

}
