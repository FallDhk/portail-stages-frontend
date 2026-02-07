import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OffreService} from '../../../../core/services/entreprise/offres/offre-service';
import {ActivatedRoute, Router} from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-offre-edit-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './offre-edit-component.html',
  styleUrl: './offre-edit-component.scss',
})
export class OffreEditComponent {

  form!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private service: OffreService,
    private route: ActivatedRoute,
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

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getOne(this.id).subscribe(o => {
      this.form.patchValue(o);
    });
  }

  // submit() {
  //   this.service.update(this.id, this.form.value).subscribe(() => {
  //     this.router.navigate(['/entreprise/offres']);
  //   });
  // }

  submit() {
    if (this.form.invalid) return;

    this.service.update(this.id, this.form.value).subscribe(() => {
      this.router.navigate(['/entreprise/offres']);
    });
  }
}
