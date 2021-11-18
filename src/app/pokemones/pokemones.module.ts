import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomeComponent, PokedexComponent, InputSearchComponent, CardComponent],
  imports: [CommonModule, MaterialDesignModule, FormsModule],
})
export class PokemonesModule {}
