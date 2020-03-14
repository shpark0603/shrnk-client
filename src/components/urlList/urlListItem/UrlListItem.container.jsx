import React from 'react';
import PropTypes from 'prop-types';

import UrlListItemComponent from './UrlListItem.component';

UrlListItemContainer.propTypes = {
  hash: PropTypes.object.isRequired,
  sample: PropTypes.bool
};

UrlListItemContainer.defaultProps = {
  sample: false
};

function UrlListItemContainer({ hash, sample }) {
  return <UrlListItemComponent hash={hash} sample={sample} />;
}

export default UrlListItemContainer;
