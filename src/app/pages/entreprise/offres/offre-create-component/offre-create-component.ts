import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {OffreService} from '../../../../core/services/entreprise/offres/offre-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offre-create-component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './offre-create-component.html',
  styleUrl: './offre-create-component.scss',
})
export class OffreCreateComponent {
  form!: any;

  constructor(
    private fb: FormBuilder,
    private service: OffreService,
    private router: Router
  ) {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      filiereCible: ['', Validators.required],
      niveauCible: ['', Validators.required],
      missions: ['', Validators.required],
      competences: ['', Validators.required],
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/entreprise/offres']);
    });
  }
}
