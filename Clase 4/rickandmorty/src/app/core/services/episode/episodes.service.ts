import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Episode } from '../../models/episode';
import { SearchResult } from '../../models/response/search-results';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { 

  }
  
  findEpisodes(): Observable<SearchResult<Episode>> {
    return this.http.get<any>(`${environment.RICKANDMORTY_API}/episode`);
  }

}
