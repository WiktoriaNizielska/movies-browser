import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPeople } from "./getPeople";
import { fetchPeopleError, fetchPeopleStatus, fetchPeopleSuccess } from "./peopleSlice";
import { selectPage } from "../../../common/Pagination/paginationSlice";

function* fetchPeopleHandler() {
  try {
    yield delay(1000);
    const page = yield select(selectPage)
    const people = yield call(getPeople, page);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeopleStatus.type, fetchPeopleHandler)
}