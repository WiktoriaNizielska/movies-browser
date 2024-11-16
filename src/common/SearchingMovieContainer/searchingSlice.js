import { createSlice } from "@reduxjs/toolkit";

const searchingSlice = createSlice({
    name: "searchingInput",
    initialState: {
        searching: false,
        query: [],
        searchedMovies: [],
        searchedPersons: [],
        loading: false,
        error: false
    },
    reducers: {
        setMovieName: (state, { payload: query }) => {
            state.query = query
        },
        setSearchedMovies: (state, { payload: searchedMovies }) => {
            state.searchedMovies = searchedMovies
        },
        setSearchedPersons: (state, { payload: searchedPerson }) => {
            state.searchedPersons = searchedPerson
        },
        setLoadingOnTrue: (state) => {
            state.loading = true
        },
        setLoadingOnFalse: (state) => {
            state.loading = false
        },
        setErrorPage: (state) => {
            state.error = true
        }

    }
});

export const {
    setSearchedMovies,
    setMovieName,
    setSearchingOnTrue,
    setSearchingOnFalse,
    setPersons,
    setSearchedPersons,
    setLoadingOnTrue,
    setLoadingOnFalse } = searchingSlice.actions;

export const selectSearching = state => state.searchingSlice;
export const selectMovieQuery = state => selectSearching(state).query;
export const selectSearchedMovies = state => selectSearching(state).searchedMovies;
export const selectSearchedPersons = state => selectSearching(state).searchedPersons;
export const selectLoading = state => selectSearching(state).loading;
export const selectError = state => selectSearching(state).error;

export default searchingSlice.reducer;



