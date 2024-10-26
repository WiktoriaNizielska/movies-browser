import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: []
  },
  reducers: {
    fetchPeople: () => { },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
    },
    fetchPeopleError: (state) => {
      state.error = true;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleError
} = peopleSlice.actions;

export const selectPeopleState = state => state.people;

export default peopleSlice.reducer;