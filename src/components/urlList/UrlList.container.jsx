import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import UrlListItem from './urlListItem';
import UrlListComponent from './UrlList.component';

UrlListContainer.propTypes = {
  isPrivate: PropTypes.bool
};

UrlListContainer.defaultProps = {
  isPrivate: false
};

function UrlListContainer({ isPrivate }) {
  const hashes = useSelector(state => {
    if (isPrivate) {
      return state.privateURL.hashes;
    }

    return state.publicURL.hashes;
  });

  return (
    <UrlListComponent isPrivate={isPrivate}>
      {hashes.length === 0 ? (
        <UrlListItem
          hash={{
            originalURL:
              'https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html',
            hash: 'e8OtuXdU'
          }}
          isPrivate={isPrivate}
          sample
        />
      ) : (
        hashes.map(hash => (
          <UrlListItem key={hash.id} hash={hash} isPrivate={isPrivate} />
        ))
      )}
    </UrlListComponent>
  );
}

export default UrlListContainer;
