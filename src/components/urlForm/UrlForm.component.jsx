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
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form__container}>
        <input
          type="text"
          name="OriginalURL"
          onChange={handleChange}
          value={originalURL}
          className={`${styles.form__input} ${error &&
            styles['form__input-error']} ${loading &&
            styles['form__input-loading']}`}
          placeholder="URL을 입력하세요"
          disabled={loading}
        />
        <button type="submit" className={styles.form__btn} disabled={loading}>
          {loading ? 'loading...' : 'shrink!'}
        </button>
      </div>
      {error && <span className={styles.form__errorMsg}>{error.message}</span>}
    </form>
  );
}

export default React.memo(UrlFormComponent);
