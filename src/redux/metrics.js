import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const URL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
// const URL2 = 'http://api.citybik.es/v2/networks';
const URL3 = 'https://app.sportdataapi.com/api/v1/soccer/leagues?apikey=1f7cbf60-6960-11ed-b4e9-fbcb66786f56';
const GETAPIDATA = 'metrics/webapp/GETAPIDATA';

const initialState = {
  isloading: true,
  apiData: [],
};

export const getApiData = createAsyncThunk(
  GETAPIDATA,
  async () => {
    try {
      const response = await axios.get(URL3);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return err;
    }
  },
);

const dataSlice = createSlice({
  name: 'petsData',
  initialState,
  reducers: [],
  extraReducers: {
    [getApiData.fulfilled]: (state, action) => {
      state.isloading = false;
      state.apiData = action.payload;
    },
    [getApiData.rejected]: (state) => {
      state.isloading = false;
    },
    [getApiData.pending]: (state) => {
      state.isloading = true;
    },
  },
});

export default dataSlice.reducer;
