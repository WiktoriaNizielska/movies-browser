import { call, put, select, takeEvery } from "redux-saga/effects";
import { getMovieByName } from "../../features/movies/fetchData";
import { selectMovieQuery, selectSearchedMovies, setMovieName, setSearchedMovies } from "./searchingSlice";

function* getMovieName() {
    try {
        const movieName = yield select(selectMovieQuery)
        const selectMovieByName = yield call(getMovieByName, movieName)
        yield put(setSearchedMovies(selectMovieByName))
    }
    catch { };
};


export function* searchingSaga() {
    
    yield takeEvery(setMovieName.type, getMovieName);
};