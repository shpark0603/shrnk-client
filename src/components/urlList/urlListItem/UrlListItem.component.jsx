import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

import styles from './UrlListItem.module.scss';

UrlListItemComponent.propTypes = {
  hash: PropTypes.object.isRequired,
  sample: PropTypes.bool
};

UrlListItemComponent.defaultProps = {
  sample: false
};

function UrlListItemComponent({ hash, sample }) {
  const [clicked, setClicked] = useState(false);
  const copyBtnRef = useRef();

  const shortURL = `http://localhost:5000/${hash.hash}`;

  useEffect(() => {
    const clipboard = new Clipboard(copyBtnRef.current);

    clipboard.on('success', () => {
      setClicked(true);
    });

    clipboard.on('error', e => {
      console.log(e);
    });

    return () => {
      clipboard.destroy();
    };
  }, [copyBtnRef]);

  const handleCopy = useCallback(() => {
    setClicked(true);
  });

  return (
    <li className={styles.item}>
      {sample ? (
        <div className={styles.item__sample}>
          <span>———— 예시입니다 ————</span>
        </div>
      ) : null}
      <div className={styles.item__left}>{hash.originalURL}</div>
      <div className={styles.item__right}>
        <a
          href={shortURL}
          className={styles.item__shortenedURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {shortURL}
        </a>
        <button
          type="button"
          ref={copyBtnRef}
          data-clipboard-text={shortURL}
          className={`${styles.item__btn} ${
            clicked ? styles['item__btn-clicked'] : ''
          }`}
          onClick={handleCopy}
        >
          {clicked ? 'copied!' : 'copy'}
        </button>
      </div>
    </li>
  );
}

export default UrlListItemComponent;
