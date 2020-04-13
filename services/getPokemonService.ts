export interface IPokemons {
    name: string;
    url: string;
}

export const getOriginalPokemons = (name?: string) => {
    // if we could search with api, we would use the name param here
    // but the api doesn't support it so we get the original 151 pokemons
    // with a limit specified and we will query this result instead with our search form
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data.results as IPokemons[];
        })
        .catch((err) => {
            // TODO: ideally we want to log the error here
            throw err;
        });
};
