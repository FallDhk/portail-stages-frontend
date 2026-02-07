import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  API = 'http://localhost:8080/api/profil-etudiant';

  constructor(private http: HttpClient) {

  }

  getCv() {
    return this.http.get<any[]>(`${this.API}/me`);
  }

  saveOrUpdate(data: any) {
    return this.http.post(`${this.API}`, data);
  }
}
