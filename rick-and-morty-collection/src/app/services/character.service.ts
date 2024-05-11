import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, catchError, map, Observable, of, switchMap, throwError} from 'rxjs';
import {Character} from "../models/character/character.module";
 // Define your character model based on the API structure

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  characters: Character[] = [];
  private localCharactersSource = new BehaviorSubject<Character[]>([]);
  localCharacters$ = this.localCharactersSource.asObservable();
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters$ = this.charactersSubject.asObservable();
  constructor(private http: HttpClient) {
  }

  getCharacterById(id: number): Character | undefined {
    return this.charactersSubject.value.find(character => character.id === id);
  }
  fetchCharacters(): void {
    this.http.get<{results: Character[]}>(this.apiUrl).pipe(
      map(response => response.results)
    ).subscribe(characters => {
      this.charactersSubject.next(characters);
    });
  }


  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  createCharacter(characterData: any): Observable<any> {
    return this.http.post(this.apiUrl, characterData).pipe(
      catchError(error => {
        console.error('Error creating character', error);
        throw error;
      })
    );
  }
  updateCharacter(id: number, characterData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, characterData).pipe(
      catchError(error => {
        console.error('Error updating character', error);
        throw error;
      })
    );
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getCharacters(): Observable<Character[]> {
    return this.http.get<{results: Character[]}>(this.apiUrl).pipe(
      map(response => response.results)
    );
  }


}
