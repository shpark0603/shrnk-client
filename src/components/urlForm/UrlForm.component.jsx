import React from 'react';
import PropTypes from 'prop-types';

UrlFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  shortenedURLs: PropTypes.arrayOf(PropTypes.object).isRequired,
  originalURL: PropTypes.string.isRequired,
  error: PropTypes.object,
  isLoading: PropTypes.bool.isRequired
};

UrlFormComponent.defaultProps = {
  error: null
};

function UrlFormComponent({
  handleChange,
  handleSubmit,
  shortenedURLs,
  originalURL,
  error,
  isLoading
}) {
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h3>loading...</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="OriginalURL"
        onChange={handleChange}
        value={originalURL}
      />
      <button type="submit">shrink!</button>
      {shortenedURLs.map(url => (
        <div key={url.id}>
          <p>{url.originalURL}</p>
          <hr />
          <p>{`http://localhost:5000/${url.hash}`}</p>
          <hr />
        </div>
      ))}
    </form>
  );
}

export default React.memo(UrlFormComponent);
