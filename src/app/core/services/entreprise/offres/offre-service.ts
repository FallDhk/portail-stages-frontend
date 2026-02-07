import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PageResponse} from '../../../models/page-response.model';
import {Offre} from '../../../models/offre.model';


@Injectable({
  providedIn: 'root',
})
export class OffreService {

  private http = inject(HttpClient);
  private API = 'http://localhost:8080/api/offres';

  getMine(
    page: number = 0,
    size: number = 10,
    sortBy: string = 'titre',
    direction: string = 'desc'
  ) {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('sortBy', sortBy)
      .set('direction', direction);
    return this.http.get<PageResponse<Offre>>(`${this.API}/entreprise`, { params });

  }

  getOne(id: number) {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.API, data);
  }


  update(id: number, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  getCandidatures(offreId: number) {
    return this.http.get<any[]>(`http://localhost:8080/api/candidatures/offre/${offreId}`);
  }


  // getCandidatures(id: number) {
  //   return this.http.get<any[]>(`${this.API}/${id}/candidatures`);
  // }

  accepterCandidature(id: number) {
    return this.http.put(`http://localhost:8080/api/candidatures/${id}/statut/ACCEPTEE`, {});
  }

  refuserCandidature(id: number) {
    return this.http.put(`http://localhost:8080/api/candidatures/${id}/statut/refuser`, {});
  }

}
