import { all } from "redux-saga/effects";
import { movieSaga } from "../features/movies/movieSaga";
import { detailsSaga } from "../features/people/personDetails/detailsSaga";
import { peopleSaga } from "../features/people/personList/peopleSaga";
import { paginationSaga } from "../common/Pagination/paginationSaga";
import { searchingSaga } from "../common/SearchingMovieContainer/searchingSaga";

export default function* saga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    detailsSaga(),
    paginationSaga(),
    searchingSaga(),
  ]);
}