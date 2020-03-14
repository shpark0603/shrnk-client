import React from 'react';
import PropTypes from 'prop-types';

import UrlListItemComponent from './UrlListItem.component';

UrlListItemComponent.propTypes = {
  hash: PropTypes.object.isRequired
};

function UrlListItemContainer({ hash }) {
  return <UrlListItemComponent hash={hash} />;
}

export default UrlListItemContainer;
