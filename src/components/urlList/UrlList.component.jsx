import React from 'react';
import PropTypes from 'prop-types';

import styles from './UrlList.module.scss';

UrlListComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool.isRequired
};

function UrlListComponent({ children, isPrivate }) {
  return (
    <section>
      <ul className={` ${isPrivate ? styles['list-private'] : styles.list}`}>
        {children}
      </ul>
    </section>
  );
}

export default UrlListComponent;
