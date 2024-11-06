import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
	name: "details",
	initialState: {
		id: "",
		details: {},
		castMovies: [],
		crewMovies: [],
		genres: [],
		status: "initial",
	},
	reducers: {
		setPeopleId: (state, { payload: personId }) => {
			state.id = personId;
			state.status = "loading";
		},
		fetchPeopleDetails: (state, { payload: details }) => {
			state.details = details;
			state.status = "success";
		},
		fetchPeopleCastMovies: (state, { payload: castMovies }) => {
			state.castMovies = castMovies;
			state.status = "success";
		},
		fetchPeopleCrewMovies: (state, { payload: crewMovies }) => {
			state.crewMovies = crewMovies;
			state.status = "success";
		},
		fetchGenres: (state, { payload: genres }) => {
			state.genres = genres;
			state.status = "success";
		},
		setError: (state) => {
			state.status = "error";
		},
	},
});

export const {
	setPeopleId,
	fetchPeopleDetails,
	fetchPeopleCastMovies,
	fetchPeopleCrewMovies,
	fetchGenres,
	setError,
} = detailsSlice.actions;

export const selectPeopleState = (state) => state.details;
export const selectPeopleId = (state) => selectPeopleState(state).id;
export const selectPeopleDetails = (state) => selectPeopleState(state).details;
export const selectPeopleCastMovies = (state) =>
	selectPeopleState(state).castMovies;
export const selectPeopleCrewMovies = (state) =>
	selectPeopleState(state).crewMovies;
export const selectPeopleStatus = (state) => selectPeopleState(state).status;
export const selectGenres = (state) => selectPeopleState(state).genres;

export default detailsSlice.reducer;