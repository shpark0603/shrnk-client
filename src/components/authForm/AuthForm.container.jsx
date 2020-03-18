import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import AuthFormComponent from './AuthForm.component';
import { login, signup } from '../../redux/auth';

AuthFormContainer.propTypes = {
  isLogin: PropTypes.bool
};

AuthFormContainer.defaultProps = {
  isLogin: false
};

function AuthFormContainer({ isLogin }) {
  const dispatch = useDispatch();
  const { error, loading } = useSelector(state => state.auth);

  const [form, setForm] = useState(() => {
    const initialState = { email: '', password: '' };

    return isLogin
      ? initialState
      : { ...initialState, confirmPassword: '', name: '' };
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }, []);

  let handleSubmit;
  if (isLogin) {
    handleSubmit = useCallback(
      e => {
        e.preventDefault();

        dispatch(login(form));
      },
      [form]
    );
  } else {
    handleSubmit = useCallback(
      e => {
        e.preventDefault();

        dispatch(signup(form));
      },
      [form]
    );
  }

  return (
    <AuthFormComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      form={form}
      isLogin={isLogin}
      error={error}
      loading={loading}
    />
  );
}

export default AuthFormContainer;
