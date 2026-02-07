import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SoutenanceService {
  API = 'http://localhost:8080/api/conventions';

  constructor(private http: HttpClient) {}

  planifier(conventionId: number, data: any) {
    return this.http.post(`${this.API}/${conventionId}/soutenance`, data);
  }

  noter(id: number, note: number) {
    return this.http.put(`${this.API}/soutenance/${id}/note/${note}`, {});
  }

  valider(id: number) {
    return this.http.put(`${this.API}/soutenance/${id}/valider`, {});
  }

  getByConvention(conventionId: number) {
    return this.http.get<any>(`${this.API}/by-convention/${conventionId}`);
  }
}
