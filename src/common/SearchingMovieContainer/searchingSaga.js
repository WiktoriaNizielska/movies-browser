import { call, delay, put, select,takeLatest} from "redux-saga/effects";
import { getMovieByName, getPersonByName } from "../../features/movies/fetchData";
import { selectError, selectMovieQuery, setLoadingOnFalse, setLoadingOnTrue, setMovieName, setSearchedMovies, setSearchedPersons } from "./searchingSlice";
import { selectPage } from "../Pagination/paginationSlice";

function* getMovieName() {
    try {
        const page = yield select(selectPage);
        const query = yield select(selectMovieQuery);
        const selectPersonByName = yield call(getPersonByName, query, page);
        const selectMovieByName = yield call(getMovieByName, query);
        
        yield put(setLoadingOnTrue());
        yield delay(1000);
        yield put(setLoadingOnFalse());
        yield put(setSearchedPersons(selectPersonByName));
        yield put(setSearchedMovies(selectMovieByName));
    }
    catch  {
        yield put(selectError());
     };
};

export function* searchingSaga() {
    yield takeLatest(setMovieName.type, getMovieName);
};