import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

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
          <li>
            <a
              href="https://github.com/shpReacts/shrnk"
              target="_blank"
              rel="noopener noreferrer"
            >
              코드보기
            </a>
          </li>
        </ul>
        <div className={styles.footer__aboutMe}>
          <p>&copy; Sanghyun Park 2020.</p>
          <a
            href="https://github.com/shpReacts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
