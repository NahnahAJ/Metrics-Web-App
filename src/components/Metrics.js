import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { getApiData } from '../redux/metrics';

const Metrics = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getApiData());
    }, [dispatch],
  );
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, [someId]); // Or [] if effect doesn't need props or state

  return (
    <>
      <Navbar />
      <div>Metrics</div>
    </>
  );
};

export default Metrics;
