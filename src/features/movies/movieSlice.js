import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieGenres: [],
    },
    reducers: {
        startFetch: (state) => {
            state.loading = true
        },
        fetchMovies: (state, { payload: moviesList }) => {
            state.movies = moviesList
        },
        fetchGenres: (state, { payload: moviesGenres }) => {
            state.movieGenres = moviesGenres
        },

        fetchMovieDetails: (state, { payload: movieDetails }) => {
            state.movies = movieDetails
        },

        fetchMoviesSucces: (state) => {
            state.loading = false
        },

        fetchMoviesError: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
});

export const selectMoviesState = state => state.movies;
export const selectMovies = state => state.movies.movies
export const selectLoading = state => state.movies.loading
export const selectMovieGenres = state => state.movies.movieGenres
export const { fetchMovies, startFetch, fetchGenres, fetchMovieDetails, fetchMoviesSucces, fetchMoviesError } = movieSlice.actions
export default movieSlice.reducer



