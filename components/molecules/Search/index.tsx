import { useRef } from "react";
import s from "./search.module.scss";

interface SearchProps {
    updateSearchQuery: (query: string) => void;
}

export default function Search(props: SearchProps) {
    const { updateSearchQuery } = props;

    const refInput = useRef(null);

    const handleClick = () => {
        const { current } = refInput;
        updateSearchQuery(current.value);
    };

    return (
        <form
            className={s.searchForm}
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <label htmlFor="pokemon" className={s.label}>
                Pokemon
            </label>
            <input
                ref={refInput}
                name="pokemon"
                type="text"
                className={s.input}
                placeholder={"Type your Pokemon name"}
            />
            <button className={s.button} onClick={handleClick}>
                Search
            </button>
        </form>
    );
}
