import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import AuthFormComponent from './AuthForm.component';

import AuthContext from '../../context/auth.context';

AuthFormContainer.propTypes = {
  isLogin: PropTypes.bool
};

AuthFormContainer.defaultProps = {
  isLogin: false
};

function AuthFormContainer({ isLogin }) {
  const [form, setForm] = useState(() => {
    const initialState = { email: '', password: '' };

    return isLogin ? initialState : { ...initialState, confirmPassword: '' };
  });

  const { login } = useContext(AuthContext);

  const handleChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    login();
    console.log(form);
  }, []);

  return (
    <AuthFormComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      form={form}
      isLogin={isLogin}
    />
  );
}

export default AuthFormContainer;
