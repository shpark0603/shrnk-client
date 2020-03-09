import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

import { createPublicURL } from '../../redux/publicURL';
import UrlFormComponent from './UrlForm.component';

function UrlFormContainer() {
  const [originalURL, setOriginalURL] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const shortenedURLs = useSelector(state => state.publicURL.shortenedURLs);

  const handleChange = useCallback(e => {
    setOriginalURL(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (originalURL.trim() === '') {
        return;
      }

      setIsLoading(true);

      try {
        const res = await Axios.post('http://localhost:5000/api/urls/public', {
          originalURL
        });
        dispatch(createPublicURL(res.data));
      } catch (err) {
        setError(err.response.data);
      } finally {
        setIsLoading(false);
        setOriginalURL('');
      }
    },
    [originalURL]
  );

  return (
    <UrlFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      originalURL={originalURL}
      shortenedURLs={shortenedURLs}
      errror={error}
      isLoading={isLoading}
    />
  );
}

export default React.memo(UrlFormContainer);
