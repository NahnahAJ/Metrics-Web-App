import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneApi } from '../redux/details';
import '../styles/Details.modules.css';

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
      <div className="detailsContainer">
        <div className="imgContainer displays">
          <img src={artDetail.imageUrl} alt={artDetail.image_id} />
        </div>
        <table>
          <tr>
            <td>Piece code</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{artDetail.nameEU}</td>
          </tr>
          <tr>
            <td>Buying Price</td>
            <td>
              $
              {artDetail.buyPrice}
            </td>
          </tr>
          <tr>
            <td>Selling Price</td>
            <td>
              $
              {artDetail.sellPrice}
            </td>
          </tr>
          <tr>
            <td>Details</td>
            <td>{artDetail.museumDesc}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Details;
