import { Component, OnInit } from "@angular/core";
import { PokemonesService } from "../../services/pokemones.service";
import { PokeApiI, Results, Details } from "../../../interfaces";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemones',
  templateUrl: "./pokemones.component.html",
})
export class PokemonesComponent implements OnInit {
  spinnerLoading: boolean;
  pokemones: PokeApiI;
  pokemon: string;

  constructor(
    private _pokeServices: PokemonesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.spinnerLoading = false;
    this.getPokedex();
  }

  getPokedex() {
    this._pokeServices.obtenerPokemones().subscribe((data: PokeApiI) => {
      this.pokemones = data;

      if (this.pokemones.results && this.pokemones.results.length > 0) {
        this.pokemones.results.forEach(pokemon => {
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];
          this.DetallePokemon(pokemon);
        });
      }
    });
  }

  DetallePokemon(pokemon: Results): void {
    this._pokeServices
      .ObtenerDetallePokemon(pokemon.url)
      .subscribe((data: Details) => {
        pokemon.details = data;
        if (pokemon.id === '151') {
          this.spinnerLoading = true;
        }
      });
  }

  verPokemon(pokemon) {
    console.log(pokemon);
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
