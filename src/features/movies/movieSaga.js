import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { fetchMovies, fetchGenres, startFetch, fetchMoviesSucces, fetchMoviesError, selectMovieId, fetchMovieDetails, setId, fetchMovieGengre, setMovieName, selectMovieQuery } from "./movieSlice"
import { getMovieByName, getMovieGenre, getMoviesDetails, getMoviesGenres, getPopularMoviesList } from "./fetchData"

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
        yield put(fetchMoviesError(error))
    };
};

function* moviesDetails() {
    try {
        const movieId = yield select(selectMovieId)
        const movieDetails = yield call(getMoviesDetails, movieId)
        const movieGenre = yield call(getMovieGenre, movieId)

        yield delay(1000)
        yield put(fetchMoviesSucces())
        yield put(fetchMovieDetails(movieDetails))
        yield put(fetchMovieGengre(movieGenre))
    }
    catch (error) {
        yield put(fetchMoviesError(error))
    };
};

function* getMovieName() {
    try {
        const movieName = yield select(selectMovieQuery)
        const selectMovieByName = yield call(getMovieByName, movieName)
        console.log(selectMovieByName)
    }
    catch {};
};

export function* movieSaga() {
    yield takeEvery(startFetch.type, fetchMoviesData);
    yield takeEvery(setId.type, moviesDetails);
    yield takeEvery(setMovieName.type, getMovieName);
};