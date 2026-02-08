import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private api = 'http://localhost:8080/api/auth';


  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post<any>(`${this.api}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUser() {
    const token = this.getToken();
    if (!token) return null;

    return jwtDecode<any>(token);
  }

  getRole(): string {
    const user = this.getUser();
    return user?.role || '';
  }

  isTokenExpired(): boolean {
    const user = this.getUser();
    if (!user?.exp) return true;

    return Date.now() > user.exp * 1000;
  }

}
