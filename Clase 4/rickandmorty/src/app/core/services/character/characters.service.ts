import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { 
    
  }

  findCharactersByPage(ids: any) {
    return this.http.get<any>(`${environment.RICKANDMORTY_API}/character/${ids}`);
  }
}
