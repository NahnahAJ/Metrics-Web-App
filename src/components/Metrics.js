import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getApiData } from '../redux/metrics';

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
      <div>
        <div>
          <input
            type="text"
            placeholder="search here"
            onChange={(e) => searchItems(e.target.value)}
          />
        </div>

        <div>
          {searchFilter.length > 1 ? (
            searchResults.map((key) => (
              <div key={key.id}>
                <img src={key.imageUrl} alt={key.image_id} />
                <h3>{key.fileName}</h3>
                <Link to={`details/${key.id}`}>
                  <h2>{key.id}</h2>
                </Link>
              </div>
            ))
          ) : (
            <div>
              {artData.map((key) => (
                <div key={key.id}>
                  <img src={key.imageUrl} alt={key.image_id} />
                  <h3>{key.fileName}</h3>
                  <Link to={`details/${key.id}`}>
                    <h2>{key.id}</h2>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Metrics;
