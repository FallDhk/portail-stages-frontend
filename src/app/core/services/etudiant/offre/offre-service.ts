import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PageResponse} from '../../../models/page-response.model';
import {Offre} from '../../../models/offre.model';

@Injectable({
  providedIn: 'root',
})
export class OffreService {
  API = 'http://localhost:8080/api/offres';
  API1 = 'http://localhost:8080/api/candidatures';

  constructor(private http: HttpClient) {}

  getOffres(
    page: number = 0,
    size: number = 15,
    sortBy: string = 'titre',
    direction: string = 'desc'
  ) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortBy', sortBy)
      .set('direction', direction);
    return this.http.get<PageResponse<Offre>>(`${this.API}`, { params });

  }

  showOffre(offreId: number){
    return this.http.get<number>(`${this.API}/${offreId}`);
  }

  postuler(offreId: number){
    return this.http.post<number>(`${this.API1}/${offreId}`,{});
  }

  getMyCandidature(offreId: number) {
    return this.http.get<any>(`${this.API1}/offre/${offreId}/me`);
  }


}
