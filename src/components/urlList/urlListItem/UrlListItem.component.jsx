import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa';

import styles from './UrlListItem.module.scss';

UrlListItemComponent.propTypes = {
  hash: PropTypes.object.isRequired
};

function UrlListItemComponent({ hash }) {
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
          className={styles.item__btn}
          onClick={handleCopy}
        >
          {clicked ? <FaClipboard /> : <FaClipboardCheck />}
        </button>
      </div>
    </li>
  );
}

export default UrlListItemComponent;
