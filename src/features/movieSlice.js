import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        movieGenres: [],
    },
    reducers: {}
})

export default movieSlice.reducer
