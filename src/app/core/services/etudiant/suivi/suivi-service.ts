import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SuiviService {

  private API = 'http://localhost:8080/api/suivi';

  constructor(private http: HttpClient) {}

  getByConvention(conventionId: number) {
    return this.http.get<any>(`${this.API}/convention/${conventionId}`);
  }

  add(conventionId: number, data: any) {
    return this.http.post(`${this.API}/${conventionId}`, data);
  }

  getProgressConvention(id: number) {
    return this.http.get<number>(`${this.API}/progress/convention/${id}`);
  }
}
