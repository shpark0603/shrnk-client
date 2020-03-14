import React from 'react';
import PropTypes from 'prop-types';

import styles from './UrlForm.module.scss';

UrlFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  originalURL: PropTypes.string.isRequired,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

UrlFormComponent.defaultProps = {
  error: null
};

function UrlFormComponent({
  handleChange,
  handleSubmit,
  originalURL,
  error,
  loading
}) {
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form__container}>
        <input
          type="text"
          name="OriginalURL"
          onChange={handleChange}
          value={originalURL}
          className={styles.form__input}
          placeholder="URL을 입력하세요"
        />
        <button type="submit" className={styles.form__btn}>
          shrink!
        </button>
      </div>
    </form>
  );
}

export default React.memo(UrlFormComponent);
