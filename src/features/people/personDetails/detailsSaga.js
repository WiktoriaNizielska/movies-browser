import { call, put, takeEvery, delay, select, all } from "redux-saga/effects";
import { selectPeopleId, setError, setGenres, setPeopleCastMovies, setPeopleCrewMovies, setPeopleDetails, setPeopleId } from "./detailsSlice";
import { getPeopleDetails } from "./getPeopleDetails";
import { getPeopleCastMovies } from "./getPeopleCastMovies";
import { getPeopleCrewMovies } from "./getPeopleCrewMovies";
import { getGenres } from "./getGenres";

function* fetchDetailsHandler() {
	try {
		yield delay(1000);
		const personId = yield select(selectPeopleId);

		const [details, castMovies, crewMovies, genreList] = yield all([
			call(getPeopleDetails, personId),
			call(getPeopleCastMovies, personId),
			call(getPeopleCrewMovies, personId),
			call(getGenres),
		]);

		yield all([
			put(setPeopleDetails(details)),
			put(setPeopleCastMovies(castMovies)),
			put(setPeopleCrewMovies(crewMovies)),
			put(setGenres(genreList)),
		]);
	} catch (error) {
		yield put(setError());
	}
};

export function* detailsSaga() {
	yield takeEvery(setPeopleId.type, fetchDetailsHandler);
};