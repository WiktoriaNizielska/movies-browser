import { call, delay, put, takeEvery } from "redux-saga/effects";
import { fetchMovies, fetchGenres, startFetch, fetchMoviesLoading, fetchMoviesSucces } from "./movieSlice"
import { getMoviesGenres, getPopularMoviesList } from "./fetchData"

function* fetchMoviesData() {
    try {
        const moviesList = yield call(getPopularMoviesList)
        const moviesGenres = yield call(getMoviesGenres)

        yield put(fetchMoviesLoading())
        yield delay(1000)
        yield put(fetchMoviesSucces())
        yield put(fetchMovies(moviesList))
        yield put(fetchGenres(moviesGenres))
    }
    catch (error) {
        new Error(error)
    }
};

export function* movieSaga() {
    yield takeEvery(startFetch.type, fetchMoviesData)
};