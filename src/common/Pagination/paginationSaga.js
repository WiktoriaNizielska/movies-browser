import { takeEvery, put } from "redux-saga/effects";
import { setPage } from "./paginationSlice";
import { setSearchContent } from "./barSlice";


function* setSearchContentHandler() {
  yield put(setPage(1));
}

export function* paginationSaga() {
  yield takeEvery(setSearchContent.type, setSearchContentHandler);
}