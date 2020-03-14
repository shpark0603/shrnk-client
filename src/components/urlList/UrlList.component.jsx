import React from 'react';

import styles from './UrlList.module.scss';

function UrlListComponent({ children }) {
  return (
    <section>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
}

export default UrlListComponent;
