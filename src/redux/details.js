import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GETSINGLEAPIDATA = 'metrics/webapp/GETSINGLEAPIDATA';

const initialState = {
  isLoading: true,
  singleData: {},
};

export const getOneApi = createAsyncThunk(
  GETSINGLEAPIDATA,
  async (id) => {
    try {
      const response = await axios.get(`http://acnhapi.com/v1/art/${id}`);
      const {
        'buy-price': buyPrice, 'file-name': fileName, hasFake, image_uri: imageUrl, 'museum-desc': museumDesc,
      } = response.data;
      const formatedData = {
        buyPrice,
        fileName,
        hasFake,
        imageUrl,
        museumDesc,
      };
      return formatedData;
    } catch (error) {
      return error;
    }
  },
);

const singleDataSlice = createSlice({
  name: 'singleData',
  initialState,
  reducers: [],
  extraReducers: {
    [getOneApi.fulfilled]: (state, action) => {
      state.isloading = false;
      state.singleData = action.payload;
    },
    [getOneApi.rejected]: (state) => {
      state.isloading = false;
    },
    [getOneApi.pending]: (state) => {
      state.isloading = true;
    },
  },
});

export default singleDataSlice.reducer;
