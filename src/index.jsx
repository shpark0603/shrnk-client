import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux';
import App from './App';
import './index.scss';
import { setUser } from './redux/auth';

(() => {
  const user = localStorage.getItem('user');
  if (!user) {
    return;
  }

  store.dispatch(setUser(user));
})();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
