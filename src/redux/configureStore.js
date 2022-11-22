import { configureStore } from '@reduxjs/toolkit';
import sliceForData from './metrics';
import detail from './details';

const store = configureStore({
  reducer: {
    apiData: sliceForData,
    singleData: detail,
  },
});

export default store;
