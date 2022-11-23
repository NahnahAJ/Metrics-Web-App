import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://acnhapi.com/v1a/art';
const GETAPIDATA = 'metrics/webapp/GETAPIDATA';

const initialState = {
  apiData: [],
  isloading: true,
};

export const getApiData = createAsyncThunk(
  GETAPIDATA,
  async () => {
    try {
      const response = await axios.get(URL);
      const data = [];

      response.data.forEach((obj) => {
        const {
          'buy-price': buyPrice, 'file-name': fileName, hasFake, id, image_uri: imageUrl, 'museum-desc': museumDesc, name,
        } = obj;
        const { 'name-EUen': nameEU } = name;

        const formatedData = {
          buyPrice,
          fileName,
          hasFake,
          id,
          imageUrl,
          museumDesc,
          nameEU,
        };

        data.push(formatedData);
      });
      return data;
    } catch (error) {
      return error;
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
