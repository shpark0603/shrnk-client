import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-main.svg';

import styles from './Navbar.module.scss';

function Navbar() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <Link to="/">
              <img src={logo} alt="shrnk logo" />
            </Link>
          </div>
          <ul className={styles.list}>
            {isLoggedIn ? (
              <>
                <li>
                  <button type="button">log out</button>
                </li>
                {/* <li>
                <Link to='/user-details'></Link>
              </li> */}
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">로그인</Link>
                </li>
                <li>
                  <Link to="/signup" className={styles.border}>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className={styles.space} />
    </>
  );
}

export default Navbar;
