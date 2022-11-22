import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const URL = 'https://api.artic.edu/api/v1/artworks';
const URL = 'https://acnhapi.com/v1a/art';
// const URL2 = 'http://api.citybik.es/v2/networks';
// const URL3 = 'https://app.sportdataapi.com/api/v1/soccer/leagues?apikey=1f7cbf60-6960-11ed-b4e9-fbcb66786f56';
// const URL4 = 'https://api.disneyapi.dev/characters';
// const URL5 = 'https://financialmodelingprep.com/api/v4/revenue-geographic-segmentation?symbol=AAPL&structure=flat&apikey=685168819ad5df0341dd18bb2b19ce1c';
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
          'buy-price': buyPrice, 'file-name': fileName, hasFake, id, image_uri: imageUrl, 'museum-desc': museumDesc,
        } = obj;

        const formatedData = {
          buyPrice,
          fileName,
          hasFake,
          id,
          imageUrl,
          museumDesc,
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
