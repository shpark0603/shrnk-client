import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import UrlListItemComponent from './UrlListItem.component';
import { deletePrivateURL } from '../../../redux/privateURL';

UrlListItemContainer.propTypes = {
  hash: PropTypes.object.isRequired,
  sample: PropTypes.bool,
  isPrivate: PropTypes.bool.isRequired
};

UrlListItemContainer.defaultProps = {
  sample: false
};

function UrlListItemContainer({ hash, sample, isPrivate }) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(urlId => {
    dispatch(deletePrivateURL(urlId));
  }, []);

  if (isPrivate) {
    return (
      <UrlListItemComponent
        isPrivate={isPrivate}
        hash={hash}
        sample={sample}
        handleDelete={handleDelete}
      />
    );
  }

  return <UrlListItemComponent hash={hash} sample={sample} />;
}

export default UrlListItemContainer;
