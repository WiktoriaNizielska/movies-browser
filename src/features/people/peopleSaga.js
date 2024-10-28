import { call, put, takeLatest } from "redux-saga/effects";
import { getPeople } from "./getPeople";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    const people = yield call(getPeople);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError(error));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler)
}