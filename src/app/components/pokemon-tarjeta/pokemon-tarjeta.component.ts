import { Component, Input} from '@angular/core';
import { PokemonesService} from '../../services/pokemones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-tarjeta',
  templateUrl: './pokemon-tarjeta.component.html',
  styles: []
})
export class PokemonTarjetaComponent {
  pokemonUrl: string;
  pokeImg: string;
  indice: number;

  @Input() pokemonesArray: any [] = [];
  constructor( private pokemonesService: PokemonesService, private _router: Router) {}
   }


