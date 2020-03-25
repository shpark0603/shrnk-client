import React from 'react';
import PropTypes from 'prop-types';

import UrlListItemComponent from './UrlListItem.component';

UrlListItemContainer.propTypes = {
  hash: PropTypes.object.isRequired,
  sample: PropTypes.bool,
  isPrivate: PropTypes.bool.isRequired
};

UrlListItemContainer.defaultProps = {
  sample: false
};

function UrlListItemContainer({ hash, sample, isPrivate }) {
  return (
    <UrlListItemComponent isPrivate={isPrivate} hash={hash} sample={sample} />
  );
}

export default UrlListItemContainer;
