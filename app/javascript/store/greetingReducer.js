import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGreetingAsync = createAsyncThunk("fetchGreeting", async () => {
  const response = await fetch("/api/v1/greetings");
  const { greeting } = await response.json();
  return greeting;
});

export const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    greet: "",
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getGreetingAsync.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        greet: action.payload,
      };
      return newState;
    },
  },
});

export default greetingSlice.reducer;
