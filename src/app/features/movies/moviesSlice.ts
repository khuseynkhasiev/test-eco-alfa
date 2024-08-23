import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMovieResponse } from "../../../interfaces/data";

interface MoviesState {
    allMovies: IMovie[];
    currentMovies: IMovie[];
    limit: number;
    page: number;
    pages: number;
    total: number;
}

const initialState: MoviesState = {
    allMovies: [],
    currentMovies: [],
    limit: 12,
    page: 1,
    pages: 1,
    total: 0,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<IMovieResponse>) => {
            const moviesWithLike = action.payload.docs.map((movie) => ({
                ...movie,
                isLike: false,
            }));
            state.allMovies = moviesWithLike;
            state.currentMovies = moviesWithLike;
            state.limit = action.payload.limit;
            state.page = action.payload.page;
            state.pages = action.payload.pages;
            state.total = action.payload.total;
        },
        toggleLike: (state, action: PayloadAction<number>) => {
            const movieInAllMovies = state.allMovies.find(
                (movie) => movie.id === action.payload
            );
            if (movieInAllMovies) {
                movieInAllMovies.isLike = !movieInAllMovies.isLike;
            }

            const movieInCurrentMovies = state.currentMovies.find(
                (movie) => movie.id === action.payload
            );
            if (movieInCurrentMovies) {
                movieInCurrentMovies.isLike = !movieInCurrentMovies.isLike;
            }
        },
        deleteMovieById: (state, action: PayloadAction<number>) => {
            const currentMovies = state.currentMovies.filter(
                (movie) => movie.id !== action.payload
            );
            const allMovies = state.allMovies.filter(
                (movie) => movie.id !== action.payload
            );
            state.allMovies = allMovies;
            state.currentMovies = currentMovies;
        },
        filterLikedMovies: (state) => {
            state.currentMovies = state.allMovies.filter(
                (movie) => movie.isLike
            );
        },
        resetFilter: (state) => {
            state.currentMovies = state.allMovies;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                page: action.payload,
            };
        },
    },
});

export const {
    setMovies,
    toggleLike,
    filterLikedMovies,
    resetFilter,
    setCurrentPage,
    deleteMovieById,
} = moviesSlice.actions;

export default moviesSlice.reducer;
