import { takeEvery, put } from "redux-saga/effects";
import { setPage, startPage } from "./paginationSlice";

function* setSearchContentHandler() {
  yield put(setPage(1));
}

export function* paginationSaga() {
  yield takeEvery(startPage.type, setSearchContentHandler);
}