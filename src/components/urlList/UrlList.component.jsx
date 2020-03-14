import React from 'react';

import styles from './UrlList.module.scss';

function UrlListComponent({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}

export default UrlListComponent;
