import { Component, OnInit } from '@angular/core';
import { PokmemonServicesService } from '../../services/pokmemon-services.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  pokemones: Pokemon[] = [];
  add: boolean = true;
  error: boolean = false;
  constructor(private pokemonService: PokmemonServicesService) {}

  buscar(event: string) {
    this.pokemonService.requestApi(event.toLowerCase()).subscribe(
      (res) => ((this.pokemones = [res]), (this.error = false)),
      (err) => (this.error = true)
    );
  }

  ngOnInit(): void {}
}
