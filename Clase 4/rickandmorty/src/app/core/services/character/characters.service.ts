import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../../models/character';
import { SearchResult } from '../../models/response/search-results';
import { Search } from '../../models/search/search';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { 
    
  }

  findAllCharacters() {
    return this.http.get<any>(`${environment.RICKANDMORTY_API}/character/`);
  }

  findCharactersByIds(ids: any) {
    return this.http.get<any>(`${environment.RICKANDMORTY_API}/character/${ids}`);
  }

  findByFiltersAndPage(search: Search, page: number): Observable<SearchResult<Character>> {
    return this.http.get<any>(`${environment.RICKANDMORTY_API}/character?page=${page}`);
  }
}
