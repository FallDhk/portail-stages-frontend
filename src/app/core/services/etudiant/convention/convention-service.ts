import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConventionService {
  API = 'http://localhost:8080/api/conventions';

  constructor(private http: HttpClient) {}

  getMine() {
    return this.http.get<any[]>(`${this.API}/etudiant`);
  }

  signerEtudiant(id: number) {
    return this.http.post(`${this.API}/${id}/signer-etudiant`, {});
  }
  getMesStages() {
    return this.http.get<any[]>(`${this.API}/mes-stages`);
  }
}
