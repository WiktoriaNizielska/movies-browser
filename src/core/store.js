import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movies/movieSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import peopleSlice from "../features/people/peopleSlice";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        movies: movieSlice,
        people: peopleSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga)