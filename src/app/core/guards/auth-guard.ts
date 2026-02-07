import { CanActivateFn,Router } from '@angular/router';

import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);


  if (auth.isTokenExpired()) {
    auth.logout();
    router.navigate(['/login']);
    return false;
  }

  if (auth.isAuthenticated()) return true;

  router.navigateByUrl('/login');
  return false;
};
