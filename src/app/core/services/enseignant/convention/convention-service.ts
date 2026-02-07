import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConventionService {

  private API = 'http://localhost:8080/api/conventions';
  private API1 = 'http://localhost:8080/api/suivi';

  constructor(private http: HttpClient) {}
  getStagere() {
    return this.http.get<any[]>(`${this.API}/encadrant`);
  }

  validerSuivi(suiviId: number, commentaire: string) {
    return this.http.put(`${this.API1}/${suiviId}/valider`, {
      commentaire
    });
  }
}
