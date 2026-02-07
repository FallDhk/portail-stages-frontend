import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConventionService {
  private API = 'http://localhost:8080/api/conventions';

  constructor(private http: HttpClient) {}

  getByEntreprise() {
    return this.http.get<any[]>(`${this.API}/entreprise`);
  }

  assignTuteur(id: number, tuteur: string) {
    return this.http.put(`${this.API}/${id}/tuteur`, { tuteur });
  }

  signerEntreprise(id: number) {
    return this.http.post(`${this.API}/${id}/signer-entreprise`, {});
  }

  getPdf(id: number) {
    return this.http.get(`${this.API}/${id}/pdf`, { responseType: 'blob' });
  }

  getStagere() {
    return this.http.get<any[]>(`${this.API}/entreprise/stagere`);
  }
}
