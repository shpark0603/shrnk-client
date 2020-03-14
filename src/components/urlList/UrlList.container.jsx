import React from 'react';
import { useSelector } from 'react-redux';

import UrlListItem from './urlListItem';
import UrlListComponent from './UrlList.component';

function UrlListContainer() {
  const hashes = useSelector(state => state.publicURL.hashes);

  return (
    <UrlListComponent>
      {hashes.map(hash => (
        <UrlListItem key={hash.id} hash={hash} />
      ))}
    </UrlListComponent>
  );
}

export default UrlListContainer;
