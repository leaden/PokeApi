import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PokeApiI, Results, Details } from "../../interfaces";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonesService {
  url = `https://pokeapi.co/api/v2/`;
  isLoading: false;
  error: false;

  constructor(private http: HttpClient) {
    console.log("Servicio Listo"); // inicializo la variable http de tipo HttpClient
  }

  // peticion por todos los pokemones
  obtenerPokemones(): Observable<PokeApiI> {
    return this.http.get<PokeApiI>(`${this.url}pokemon/?limit=151`);
  }

  // peticion por pokemon
  ObtenerDetallePokemon(generic: string): Observable<Details> {
    return this.http.get<Details>(`${generic}`);
  }

  ObtenerDetalleUnico(id: string): Observable<Details> {
    return this.http.get<Details>(`${this.url}pokemon/${id}`);
  }
}
