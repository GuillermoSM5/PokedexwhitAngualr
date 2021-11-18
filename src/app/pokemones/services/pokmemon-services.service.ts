import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokmemonServicesService {
  baseurl: string = 'https://pokeapi.co/api/v2';
  private _pokemones: Pokemon[] = [];

  constructor(private http: HttpClient) {
    this._pokemones = JSON.parse(localStorage.getItem('pokedex')!) || [];
  }

  get pokemones(): Pokemon[] {
    return this._pokemones;
  }

  requestApi(termino: string): Observable<Pokemon> {
    const url = `${this.baseurl}/pokemon/${termino}`;
    return this.http.get<Pokemon>(url);
  }

  catchPokemon(pokemon: Pokemon) {
    if (this._pokemones.find((element) => element.id === pokemon.id)) return;
    this._pokemones.push(pokemon);

    localStorage.setItem('pokedex', JSON.stringify(this._pokemones));
  }

  freePokemon(pokemon: Pokemon) {
    this._pokemones = this._pokemones.filter((poke) => poke.id !== pokemon.id);
    localStorage.setItem('pokedex', JSON.stringify(this._pokemones));
  }
}
