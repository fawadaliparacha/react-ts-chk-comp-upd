import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiKey = createAsyncThunk(
  "setup/fetchApiKey",
  async (_, thunkAPI) => {
    try {
      console.log("Api Executed")
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);