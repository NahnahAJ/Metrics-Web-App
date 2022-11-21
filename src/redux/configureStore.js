import { configureStore, combineReducers } from '@reduxjs/toolkit';
import sliceForData from './metrics';

const rootReducer = combineReducers({
  apiData: sliceForData,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
