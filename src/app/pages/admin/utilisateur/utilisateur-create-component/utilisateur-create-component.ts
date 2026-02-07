import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UtilisateurService} from '../../../../core/services/admin/utilisateur/utilisateur-service';

@Component({
  selector: 'app-utilisateur-create-component',
  imports: [ReactiveFormsModule],
  templateUrl: './utilisateur-create-component.html',
  styleUrl: './utilisateur-create-component.scss',
})
export class UtilisateurCreateComponent {
  form!: any;
  constructor(
    private fb: FormBuilder,
    private service: UtilisateurService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],

    });
  }

  submit() {
    if (this.form.invalid) return;

    this.service.create(this.form.value).subscribe(() => {
      this.router.navigate(['/admin/users']);
    });
  }
}
