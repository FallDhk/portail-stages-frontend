import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RapportService {
  private API = 'http://localhost:8080/api/rapport';

  constructor(private http: HttpClient) {}

  deposer(conventionId: number, file: File) {
    const form = new FormData();
    form.append('file', file);

    return this.http.post(`${this.API}/${conventionId}/deposer`, form);
  }
  valider(id: number) {
    return this.http.put(`${this.API}/${id}/valider`, {});
  }

  getRapportByConvention(conventionId: number) {
    return this.http.get<any>(`${this.API}/convention/${conventionId}`);
  }
}
