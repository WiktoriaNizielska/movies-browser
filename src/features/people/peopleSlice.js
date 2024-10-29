import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: []
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.loading = false;
      state.people = people;
    },
    fetchPeopleError: (state) => {
      state.loading = false;
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