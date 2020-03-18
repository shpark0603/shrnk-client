import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createPublicURL } from '../../redux/publicURL';
import UrlFormComponent from './UrlForm.component';

function UrlFormContainer() {
  const [originalURL, setOriginalURL] = useState('');

  const dispatch = useDispatch();
  const { loading, error, hashes } = useSelector(state => state.publicURL);

  const handleChange = useCallback(e => {
    setOriginalURL(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      dispatch(createPublicURL(originalURL));

      setOriginalURL('');
    },
    [originalURL]
  );

  useEffect(() => {
    localStorage.setItem('hashes', JSON.stringify(hashes));
  }, [hashes]);

  return (
    <UrlFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      originalURL={originalURL}
      error={error}
      loading={loading}
    />
  );
}

export default React.memo(UrlFormContainer);
