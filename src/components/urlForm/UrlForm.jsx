import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';

import publicURLReducer, { createPublicURL } from '../../redux/publicURL';

function UrlForm() {
  const [originalURL, setOriginalURL] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const publicURL = useSelector(state => state.publicURL);

  const handleChange = e => {
    setOriginalURL(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (originalURL.trim() === '') {
      return;
    }

    setIsLoading(true);

    try {
      const res = await Axios.post('http://localhost:5000/api/urls/public', {
        originalURL,
      });
      dispatch(createPublicURL(res.data));
    } catch (err) {
      setError(err.response.data);
    } finally {
      setIsLoading(false);
      setOriginalURL('');
    }
  };

  console.log(publicURL);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="OriginalURL"
        onChange={handleChange}
        value={originalURL}
      />
      <button type="submit">shrink!</button>
      {publicURL &&
        publicURL.forEach(data => (
          <div key={data.id}>
            <p>{data.originalURL}</p>
            <p>{data.shortURL}</p>
          </div>
        ))}
    </form>
  );
}

export default UrlForm;
