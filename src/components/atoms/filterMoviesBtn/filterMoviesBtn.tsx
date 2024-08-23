import { useDispatch } from "react-redux";
import {
    filterLikedMovies,
    resetFilter,
} from "../../../app/features/movies/moviesSlice";
import { useState } from "react";
export const FilterMoviesBtn = () => {
    const [isFiltered, setIsFiltered] = useState(false);
    const dispacth = useDispatch();

    const handleFilterMovies = () => {
        if (isFiltered) {
            dispacth(resetFilter());
            setIsFiltered(false);
        } else {
            dispacth(filterLikedMovies());
            setIsFiltered(true);
        }
    };
    return (
        <button onClick={handleFilterMovies} className="FilterMoviesBtn">
            Фильтровать
        </button>
    );
};
