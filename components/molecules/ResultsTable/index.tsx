import { useState } from "react";
import { IPokemons } from "../../../services/getPokemonService";
import s from "./results-table.module.scss";

export default function ResultsTable(props: { pokemons: IPokemons[] }) {
    const { pokemons } = props;
    const resultsPerPage = 3;
    const maxPage = Math.ceil(pokemons.length / resultsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const getCurrentPageResults = () => {
        if (!pokemons.length) return [];
        const start = (currentPage - 1) * resultsPerPage;
        const end = start + resultsPerPage;
        return pokemons.slice(start, end);
    };

    const nextPage = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    };

    const prevPage = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    };

    const renderPagination = () => {
        if (maxPage < 2) return null;

        return (
            <div className={s.pagination}>
                Showing {currentPage} of {maxPage} pages (3 pokemons per page)
                <br />
                {currentPage > 1 && (
                    <button onClick={prevPage}>Previous</button>
                )}
                {currentPage < maxPage && (
                    <button onClick={nextPage}>Next</button>
                )}
            </div>
        );
    };

    const currentPokemons = getCurrentPageResults();
    if (!currentPokemons.length) return null;

    return (
        <div className={s.resultsTable}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPokemons.map((p, i) => {
                        return (
                            <tr key={i}>
                                <td>{p.name}</td>
                                <td>
                                    <a href={p.url} target="_blank">
                                        request
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
}
