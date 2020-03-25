import React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';
import logo from '../../assets/images/logo-footer.svg';

function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="shrnk logo" />
      <div className={styles.footer__info}>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
        </ul>
        <div className={styles.footer__aboutMe}>
          <p>&copy; Sanghyun Park 2020.</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
