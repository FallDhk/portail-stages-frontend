import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/auth-service';
import {inject} from '@angular/core';


export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // const token = localStorage.getItem('token');
  //
  // if (token) {
  //   req = req.clone({
  //     setHeaders: { Authorization: `Bearer ${token}` }
  //   });
  // }
  //
  // return next(req);

  const auth = inject(AuthService);
  const token = auth.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};
