export interface PokemonListResponse {
    next?:    string;
    count:   number;
    results: SmallPokemon[];
}

export interface SmallPokemon {
    name: string;
    url:  string;
    id: number;
    img: string;
}
