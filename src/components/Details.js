import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneApi } from '../redux/details';

const Details = () => {
  const dispatch = useDispatch();
  const artDetail = useSelector((state) => state.singleData.singleData);
  const { id } = useParams();
  useEffect(
    () => {
      dispatch(getOneApi(id));
    }, [dispatch, id],
  );

  return (

    <>
      <div>
        <p>{artDetail.buyPrice}</p>
        <h1>{artDetail.fileName}</h1>
        <h2>{artDetail.museumDesc}</h2>
        <img src={artDetail.imageUrl} alt={artDetail.image_id} />
      </div>
    </>
  );
};

export default Details;

// buyPrice,
// fileName,
// hasFake,
// id,
// imageUrl,
// museumDesc,
