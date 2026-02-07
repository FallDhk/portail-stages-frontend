import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  API = 'http://localhost:8080/api/candidatures';

  constructor(private http: HttpClient) {}

  getCandidatures() {
    return this.http.get<any[]>(`${this.API}/me`);
  }
}
