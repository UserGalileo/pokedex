import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getAll({ limit } = { limit: 151 }): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${env.api}/pokemon?_limit=${limit}`);
  }

  get(id: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${env.api}/pokemon/${id}`);
  }
}
