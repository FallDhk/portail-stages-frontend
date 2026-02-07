import { Component } from '@angular/core';
import {FormBuilder, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../core/services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.auth.login(this.form.value).subscribe({
      // next: () => this.router.navigateByUrl('/dashboard'),
      next: res => {
        const role = this.auth.getRole();
        if (role === 'ADMIN') this.router.navigate(['/']);
        else if (role === 'ENTREPRISE') this.router.navigate(['/']);
        else if (role === 'ENSEIGNANT') this.router.navigate(['/']);
        else this.router.navigate(['/']);

        // if (role === 'ADMIN') this.router.navigate(['/admin']);
        // else if (role === 'ENTREPRISE') this.router.navigate(['/entreprise']);
        // else if (role === 'ENSEIGNANT') this.router.navigate(['/enseignant']);
        // else this.router.navigate(['/etudiant']);
      },
      error: err => alert('Login incorrect')
    });
  }

}
