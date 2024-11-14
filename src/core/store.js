import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movies/movieSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import peopleSlice from "../features/people/personList/peopleSlice";
import detailsSlice from "../features/people/personDetails/detailsSlice";
import searchingSlice from "../common/SearchingMovieContainer/searchingSlice"

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        movies: movieSlice,
        people: peopleSlice,
        details: detailsSlice,
        searchingSlice: searchingSlice

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga)