import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';

import styles from './AuthForm.module.scss';

AuthFormComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  isLogin: PropTypes.bool,
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

AuthFormComponent.defaultProps = {
  isLogin: false
};

function AuthFormComponent({
  handleSubmit,
  handleChange,
  form,
  isLogin,
  error,
  loading
}) {
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.form__title}>
          {isLogin ? '로그인' : '회원가입'}
        </h1>

        {!isLogin && (
          <div className={styles.form__group}>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="이름"
              value={form.name}
              autoComplete="name"
            />
            <label htmlFor="name">이름</label>
          </div>
        )}

        <div className={styles.form__group}>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="이메일"
            value={form.email}
            autoComplete="email"
          />
          <label htmlFor="email">이메일</label>
        </div>

        <div className={styles.form__group}>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder={isLogin ? '비밀번호' : '비밀번호 (6자 이상)'}
            value={form.password}
            autoComplete={isLogin ? 'current-password' : 'new-password'}
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
              autoComplete="new-password"
            />
            <label htmlFor="confirmPassword">비밀번호 확인</label>
          </div>
        )}
        <span className={styles.form__errorBox}>{error?.message}</span>
        <button type="submit" className={styles.form__btn} disabled={loading}>
          {loading ? (
            <SyncLoader color="white" size="10px" />
          ) : isLogin ? (
            '로그인'
          ) : (
            '회원가입'
          )}
        </button>
        <span className={styles.form__link}>
          {isLogin ? '아직 회원이 아니신가요?' : '이미 회원이신가요?'}{' '}
          <Link
            to={isLogin ? '/signup' : '/login'}
            className={loading ? styles.disabledAnchor : ''}
          >
            {isLogin ? '회원가입' : '로그인'}
          </Link>
        </span>
      </form>
    </div>
  );
}

export default AuthFormComponent;
