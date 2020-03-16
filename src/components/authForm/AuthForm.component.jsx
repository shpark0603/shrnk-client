import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './AuthForm.module.scss';

AuthFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

function AuthFormComponent({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.form__title}>로그인</h1>
      <div className={styles.form__group}>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className={styles.form__group}>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <label htmlFor="password">Password</label>
      </div>

      <button type="submit" className={styles.form__btn}>
        로그인
      </button>
      <Link to="/signup" className={styles.form__link}>
        회원가입
      </Link>
    </form>
  );
}

export default AuthFormComponent;
