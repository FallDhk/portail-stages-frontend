import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConventionService {
  API = 'http://localhost:8080/api/conventions';

  constructor(private http: HttpClient) {}

  getAllPending() {
    return this.http.get<any[]>(`${this.API}/admin`);
  }
  getEnseignants() {
    return this.http.get<any[]>(`${this.API}/getEnseignants`);
  }

  valider(conventionId: number, encadrantId: number) {

    return this.http.post(`${this.API}/${conventionId}/valider-admin/${encadrantId}`, {});
  }

  getReady() {
    return this.http.get<any[]>(`${this.API}/ready-soutenance`);
  }


}
