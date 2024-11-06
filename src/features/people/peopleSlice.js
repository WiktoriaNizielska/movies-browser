import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    status: "initial",
  },
  reducers: {
    fetchPeopleStatus: (state) => {
      state.status = "loading";
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.status = "success";
      state.people = people;
    },
    fetchPeopleError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPeopleStatus,
  fetchPeopleSuccess,
  fetchPeopleError
} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;
export const selectStatus = (state) => selectPeopleState(state).status;
export const selectPeople = (state) => selectPeopleState(state).people;
export default peopleSlice.reducer;