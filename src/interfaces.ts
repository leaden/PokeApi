export interface PokeApiI {

    count: Number;
    next: String;
    results: Results [];

}

// Interfaz pokedex
export interface Results {

    name: string;
    id: string;
    url: string;
    details: Details;
    
}

export interface Details {

    id: number;
    name: string;
    sprites: Sprites;    
}


export interface Sprites {
    front_default:string;
}


