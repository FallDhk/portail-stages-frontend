import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  API = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {

  }
  getusers() {
    return this.http.get<any>(`${this.API}/user`);
  }
  create(data: any) {
    return this.http.post(`${this.API}/register`, data);
  }
}
