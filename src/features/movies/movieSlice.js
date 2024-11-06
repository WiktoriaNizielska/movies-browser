import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieDetails: [],
        movieGenres: [],
        movieGenre: [],
        id: ""
    },
    reducers: {
        startFetch: (state) => {
            state.loading = true
        },
        setId: (state, { payload: id }) => {
            state.id = id
            state.loading = true
        },
        fetchMovies: (state, { payload: moviesList }) => {
            state.movies = moviesList
        },
        fetchGenres: (state, { payload: moviesGenres }) => {
            state.movieGenres = moviesGenres
        },
        fetchMovieGengre: (state, { payload: movieGenre }) => {
            state.movieGenre = movieGenre
        },

        fetchMovieDetails: (state, { payload: movieDetails }) => {
            state.movieDetails = movieDetails
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
export const selectMoviesDetails = state => selectMoviesState(state).movieDetails
export const selectMovieId = state => selectMoviesState(state).id
export const selectMovies = state => state.movies.movies
export const selectLoading = state => state.movies.loading
export const selectMovieGenres = state => state.movies.movieGenres
export const selectMovieGenre = state => selectMoviesState(state).movieGenre

export const {
    fetchMovies,
    startFetch,
    fetchGenres,
    fetchMovieDetails,
    fetchMoviesSucces,
    fetchMoviesError,
    setId,
    fetchMovieGengre
} = movieSlice.actions
export default movieSlice.reducer



