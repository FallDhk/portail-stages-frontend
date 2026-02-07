import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private api = 'http://localhost:8080/api/stats';

  constructor(private http: HttpClient) {}

  adminStats(): Observable<any> {
    return this.http.get(`${this.api}/admin`);
  }

  etudiantStats(): Observable<any> {
    return this.http.get(`${this.api}/etudiant`);
  }

  entrepriseStats(): Observable<any> {
    return this.http.get(`${this.api}/entreprise`);
  }
}
