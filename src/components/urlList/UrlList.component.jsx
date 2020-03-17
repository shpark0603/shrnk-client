import React from 'react';
import PropTypes from 'prop-types';

import styles from './UrlList.module.scss';

UrlListComponent.propTypes = {
  children: PropTypes.node.isRequired
};

function UrlListComponent({ children }) {
  return (
    <section>
      <ul className={styles.list}>{children}</ul>
    </section>
  );
}

export default UrlListComponent;
