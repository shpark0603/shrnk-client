import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

import styles from './UrlListItem.module.scss';

UrlListItemComponent.propTypes = {
  hash: PropTypes.object.isRequired,
  sample: PropTypes.bool,
  isPrivate: PropTypes.bool.isRequired
};

UrlListItemComponent.defaultProps = {
  sample: false
};

function UrlListItemComponent({ hash, sample, isPrivate }) {
  const [copied, setCopied] = useState(false);
  const copyBtnRef = useRef();

  const shortURL = `http://localhost:5000/${hash.hash}`;

  useEffect(() => {
    const clipboard = new Clipboard(copyBtnRef.current);

    let timeoutId;
    clipboard.on('success', () => {
      setCopied(true);

      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 1000);
    });

    clipboard.on('error', () => {
      alert('이 기능을 사용할 수 없습니다. 직접 복사해주세요.');
    });

    return () => {
      clearTimeout(timeoutId);
      clipboard.destroy();
    };
  }, [copyBtnRef]);

  return (
    <li className={`${isPrivate ? styles['item-private'] : styles.item}`}>
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
            copied ? styles['item__btn-copied'] : ''
          }`}
        >
          {copied ? 'copied!' : 'copy'}
        </button>
      </div>
    </li>
  );
}

export default UrlListItemComponent;
