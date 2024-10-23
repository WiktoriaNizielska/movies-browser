import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers: {}
})

export default movieSlice.reducer
