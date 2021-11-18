import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interface';
import { PokmemonServicesService } from '../../services/pokmemon-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Input() add: boolean = false;

  constructor(private servicePokemon: PokmemonServicesService) {}

  atrapar(pokemon: Pokemon) {
    console.log(pokemon);
    this.servicePokemon.catchPokemon(pokemon);
  }

  liberar(pokemon: Pokemon) {
    this.servicePokemon.freePokemon(pokemon);
  }
  ngOnInit(): void {}
}
