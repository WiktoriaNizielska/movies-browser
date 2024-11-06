import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPeople } from "./getPeople";
import {  fetchPeopleError, fetchPeopleStatus, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler() {
  try {
    yield delay(1000);
    const people = yield call(getPeople);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPeopleStatus.type, fetchPeopleHandler)
}