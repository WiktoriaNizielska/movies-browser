import { createSlice } from "@reduxjs/toolkit";

const searchingSlice = createSlice({
    name: "searchingInput",
    initialState: {
        searching: false,
        query: [],
        searchedMovies: [],
    },
    reducers: {
        setMovieName: (state, { payload: query }) => {
            state.query = query
        },
        setSearchedMovies: (state, { payload: searchedMovies }) => {
            state.searchedMovies = searchedMovies
        },
        setSearchingOnTrue: (state) => {
            state.searching = true
        },
        setSearchingOnFalse: (state) => {
            state.searching = false
        }


    }
});

export const { setSearchedMovies, setMovieName, setSearchingOnTrue, setSearchingOnFalse } = searchingSlice.actions

export const selectSearching = state => state.searchingSlice
export const selectMovieQuery = state => selectSearching(state).query
export const selectSearchedMovies = state => selectSearching(state).searchedMovies
export const selectSearchingIsTrue = state => selectSearching(state).searching

export default searchingSlice.reducer



