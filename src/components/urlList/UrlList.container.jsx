import React from 'react';
import { useSelector } from 'react-redux';

import UrlListItem from './urlListItem';
import UrlListComponent from './UrlList.component';

function UrlListContainer() {
  const hashes = useSelector(state => state.publicURL.hashes);

  return (
    <UrlListComponent>
      {hashes.length === 0 ? (
        <UrlListItem
          hash={{
            originalURL:
              'https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html',
            hash: 'e8OtuXdU'
          }}
          sample
        />
      ) : (
        hashes.map(hash => <UrlListItem key={hash.id} hash={hash} />)
      )}
    </UrlListComponent>
  );
}

export default UrlListContainer;
