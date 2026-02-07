import {CanActivateFn, Router} from '@angular/router';

import { inject } from '@angular/core';
import {AuthService} from '../services/auth-service';
// import { AuthService } from '../auth/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);


  const expectedRole = route.data['role'];
  const userRole = auth.getRole();

  if (!auth.isAuthenticated()) {
    console.log('aut');
    router.navigate(['/login']);
    return false;
  }

  if (expectedRole && userRole !== expectedRole) {
    console.log('role');
    router.navigate(['/login']);
    return false;
  }
  return true;
};
