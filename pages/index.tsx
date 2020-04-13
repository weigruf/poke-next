import { useEffect, useState } from "react";
import Search from "../components/molecules/Search";
import ResultsTable from "../components/molecules/ResultsTable";
import { getOriginalPokemons } from "../services/getPokemonService";

import s from "./index.module.scss";

function Index() {
    const [searchQuery, setSearchQuery] = useState("");
    const [originalPokemons, setOriginalPokemons] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getOriginalPokemons().then((data) => {
            setOriginalPokemons(data);
        });
    }, []);

    useEffect(() => {
        setPokemons(filterPokemons());
    }, [searchQuery]);

    const updateSearchQuery = (pokemon: string) => {
        setSearchQuery(pokemon);
    };

    const filterPokemons = () => {
        if (!searchQuery) return;
        if (searchQuery === "all") return originalPokemons;
        return originalPokemons.filter((p) => p.name.indexOf(searchQuery) > -1);
    };

    return (
        <div className={s.index}>
            <h1 className={s.h1}>PokéAPI</h1>
            <h2 className={s.h2}>The RESTful Pokémon API</h2>
            <p className={s.hint}>
                Search Pokemons by name.
                <br className={s.br} /> Type 'all' without quotes to show all
                original 151 pokemons.
            </p>
            <Search updateSearchQuery={updateSearchQuery} />
            {searchQuery && (
                <p className={s.hint}>
                    Found {(pokemons && pokemons.length) || 0} pokemons
                </p>
            )}
            {pokemons && pokemons.length && searchQuery ? (
                <ResultsTable
                    pokemons={
                        pokemons && searchQuery ? pokemons : originalPokemons
                    }
                />
            ) : null}
        </div>
    );
}

export default Index;
