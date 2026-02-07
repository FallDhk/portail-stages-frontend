import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {AuthService} from './services/auth-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const roles = route.data?.['role'];
  const userRole = auth.getRole();


  if (roles && roles.includes(userRole)) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
