import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movieSlice"
import createSagaMiddleware from "redux-saga"
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        movies: movieSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(saga)