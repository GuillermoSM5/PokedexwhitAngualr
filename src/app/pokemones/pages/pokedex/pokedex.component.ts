import { Component, OnInit } from '@angular/core';
import { PokmemonServicesService } from '../../services/pokmemon-services.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styles: [],
})
export class PokedexComponent implements OnInit {
  pokemones: Pokemon[] = [];
  constructor(private servicePokemon: PokmemonServicesService) {}

  get personajes() {
    return this.servicePokemon.pokemones;
  }
  ngOnInit(): void {
    //this.pokemones = this.servicePokemon.pokemones;
  }
}
