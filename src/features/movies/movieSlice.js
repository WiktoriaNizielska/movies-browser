import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieGenres: [],
        loading: true
    },
    reducers: {
        startFetch: () => { },
        fetchMovies: (state, { payload: moviesList }) => {
            state.movies = moviesList
        },
        fetchGenres: (state, { payload: moviesGenres }) => {
            state.movieGenres = moviesGenres
        },

        fetchMovieDetails: (state, { payload: movieDetails }) => {
            state.movies = movieDetails
        },

        fetchMoviesLoading: (state) => {
            state.loading = true
        },

        fetchMoviesSucces: (state) => {
            state.loading = false
        },
    }
});

export const selectMovies = state => state.movies.movies
export const selectLoading = state => state.movies.loading
export const selectMovieGenres = state => state.movies.movieGenres
export const { fetchMovies, startFetch, fetchGenres, fetchMovieDetails, fetchMoviesLoading, fetchMoviesSucces } = movieSlice.actions
export default movieSlice.reducer



