import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService} from '../../services/pokemones.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  pokemones: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _pokeServices: PokemonesService) { }

  ngOnInit()  {
    this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    //this.pokemones = this._pokeServices.obtenerPokemones(params['termino']);
    
  });
}
}