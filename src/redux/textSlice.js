import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchText = createAsyncThunk(
  "texts/getText",
  async (paras, format) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/?type=all-meat&paras=${paras}&format=format`
    );
    return res.data;
  }
);

export const textSlice = createSlice({
  name: "texts",
  initialState: {
    textList: [],
    copyList: [],
    paras: 0,
    format: "text",
    isLoading: true,
  },
  reducers: {
    changeType: (state, action) => {
      state.format = action.payload;
      state.copyList = [...state.textList];
    },
  },
  extraReducers: {
    [fetchText.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchText.fulfilled]: (state, action) => {
      const { paras } = action.payload;
      state.paras = paras;
      state.textList = action.payload;
      state.copyList = action.payload;
      state.isLoading = false;
    },
  },
});

export const { changeType } = textSlice.actions;
export default textSlice.reducer;
