import { all } from "redux-saga/effects";
import { movieSaga } from "../features/movieSaga";

export default function* saga() {
  yield all([
    movieSaga(),
  ]);
}