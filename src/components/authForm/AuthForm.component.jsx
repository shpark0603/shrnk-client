import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './AuthForm.module.scss';

AuthFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  isLogin: PropTypes.bool
};

AuthFormComponent.defaultProps = {
  isLogin: false
};

function AuthFormComponent({ handleSubmit, handleChange, form, isLogin }) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.form__title}>
          {isLogin ? '로그인' : '회원가입'}
        </h1>
        <div className={styles.form__group}>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="이메일"
            value={form.email}
          />
          <label htmlFor="email">이메일</label>
        </div>

        <div className={styles.form__group}>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="비밀번호"
            value={form.password}
          />
          <label htmlFor="password">비밀번호</label>
        </div>

        {!isLogin && (
          <div className={styles.form__group}>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="비밀번호 확인"
              value={form.confirmPassword}
            />
            <label htmlFor="confirmPassword">비밀번호 확인</label>
          </div>
        )}

        <button type="submit" className={styles.form__btn}>
          {isLogin ? '로그인' : '회원가입'}
        </button>
        <span className={styles.form__link}>
          {isLogin ? '아직 회원이 아니신가요?' : '이미 회원이신가요?'}{' '}
          <Link to={isLogin ? '/signup' : '/login'}>
            {isLogin ? '회원가입' : '로그인'}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default AuthFormComponent;
