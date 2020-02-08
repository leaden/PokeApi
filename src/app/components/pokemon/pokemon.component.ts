import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonesService } from "../../services/pokemones.service";
import { Details } from "src/interfaces";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styles: []
})
export class PokemonComponent implements OnInit {
  pokemon: Details;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _pokeServices: PokemonesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this._pokeServices
        .ObtenerDetalleUnico(data["id"])
        .subscribe((data: Details) => {
          this.pokemon = data;
          this.pokemon.id = data.id;
        });
    });
  }
}
