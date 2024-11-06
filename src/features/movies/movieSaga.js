import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchMovies, fetchGenres, startFetch, fetchMoviesSucces, fetchMoviesError } from "./movieSlice"
import { getMoviesGenres, getPopularMoviesList } from "./fetchData"

function* fetchMoviesData() {
    try {
        const moviesList = yield call(getPopularMoviesList)
        const moviesGenres = yield call(getMoviesGenres)

        yield delay(1000)
        yield put(fetchMoviesSucces())
        yield put(fetchMovies(moviesList))
        yield put(fetchGenres(moviesGenres))
    }
    catch (error) {
        yield put (fetchMoviesError(error))
    }
};

export function* movieSaga() {
    yield takeEvery(startFetch.type, fetchMoviesData)
};