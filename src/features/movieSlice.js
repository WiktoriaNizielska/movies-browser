import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieGenres: [],
    },
    reducers: {
        addMovies: () => { }
    }
})

export const selectMovies = state => state.movies.movies
export default movieSlice.reducer
export const { addMovies } = movieSlice.actions


