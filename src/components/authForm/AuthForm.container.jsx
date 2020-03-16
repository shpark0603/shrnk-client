import React, { useState } from 'react';

import AuthFormComponent from './AuthForm.component';

function AuthFormContainer() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <AuthFormComponent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
}

export default AuthFormContainer;
