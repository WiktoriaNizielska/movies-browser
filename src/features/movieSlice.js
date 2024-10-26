import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieGenres: [],
    },
    reducers: {
        startFetch: () => { },
        fetchMovies: (state, { payload: moviesList }) => {
            state.movies = moviesList
        },
        fetchGenres: (state, { payload: moviesGenres }) => {
            state.movieGenres = moviesGenres
        }
    }
});

export const selectMovies = state => state.movies.movies
export const selectMovieGenres = state => state.movies.movieGenres
export const { fetchMovies, startFetch, fetchGenres } = movieSlice.actions
export default movieSlice.reducer


