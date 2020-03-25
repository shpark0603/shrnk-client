import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';

import { createPublicURL } from '../../redux/publicURL';
import { createPrivateURL } from '../../redux/privateURL';
import UrlFormComponent from './UrlForm.component';

UrlFormContainer.propTypes = {
  isPrivate: PropTypes.bool
};

UrlFormContainer.defaultProps = {
  isPrivate: false
};

function UrlFormContainer({ isPrivate }) {
  const [originalURL, setOriginalURL] = useState('');

  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => {
    if (isPrivate) {
      return state.privateURL;
    }

    return state.publicURL;
  });

  const handleChange = useCallback(e => {
    setOriginalURL(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      if (isPrivate) {
        dispatch(createPrivateURL(originalURL));
      } else {
        dispatch(createPublicURL(originalURL));
      }

      setOriginalURL('');
    },
    [originalURL]
  );

  return (
    <UrlFormComponent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      originalURL={originalURL}
      error={error}
      loading={loading}
      isPrivate={isPrivate}
    />
  );
}

export default React.memo(UrlFormContainer);
