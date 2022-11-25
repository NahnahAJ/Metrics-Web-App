import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { getApiData } from '../redux/metrics';
import '../styles/Metrics.modules.css';

const Metrics = () => {
  const dispatch = useDispatch();
  const artData = useSelector((state) => state.apiData.apiData);
  const [searchFilter, setSearchFilter] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const searchItems = (searchValue) => {
    setSearchFilter(searchValue);
    if (searchFilter !== '') {
      const filteredData = artData.filter((item) => Object.values(item)
        .join('')
        .toLowerCase()
        .includes(searchFilter.toLowerCase()));
      setSearchResults(filteredData);
    } else {
      setSearchResults(artData);
    }
  };

  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch]);

  return (
    <>

      <div className="searchBox">
        <input
          className="displays inputCmp"
          type="text"
          placeholder="search here"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <h2 className="header">Pieces</h2>

      <div className="searchPieces">
        {searchFilter.length > 1 ? (
          searchResults.map((key) => (
            <div key={key.id} className="container displays">
              <span className="svgContainer displays"><Link to={`details/${key.id}`}><FaAngleDoubleRight className="iconSize" /></Link></span>
              <img src={key.imageUrl} alt={key.image_id} />
              <h3>{key.nameEU}</h3>
            </div>
          ))
        ) : (
          <div className="pieces">
            {artData.map((key) => (
              <div key={key.id} className="container displays">
                <div className="svgContainer displays"><Link to={`details/${key.id}`}><FaAngleDoubleRight className="iconSize" /></Link></div>
                <div><img src={key.imageUrl} alt={key.image_id} /></div>
                <span>
                  <h3>{key.nameEU}</h3>
                  <h3 className="numbers">{key.id}</h3>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Metrics;
