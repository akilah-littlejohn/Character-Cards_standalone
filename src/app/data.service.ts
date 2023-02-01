import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character } from './interfaces/character';
import { DataResponse } from './interfaces/data-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endpoint = 'https://rickandmortyapi.com/api/character';

  constructor(private http:HttpClient) { }
  getCharacterData(): Observable<DataResponse> {
    return this.http
      .get<DataResponse>(this.endpoint)
      .pipe(map(this.mapResponse));
  }

  private mapResponse(response: DataResponse): DataResponse {
    return {
      info: { ...response.info },
      results: response.results ? response.results.map(
        (character: any) =>
          <Character>{
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            location: {
              name: character.location.name,
              url: character.location.url,
            },
            image: character.image,
            episode: character.episode,
          }
      ) : []
    };
}
}
