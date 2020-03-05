import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';
import sharedStyles from '../../assets/shared.module.scss';

function Navbar() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <nav className={styles.navbar}>
      <div className={cn(styles.container, sharedStyles.contained)}>
        <div className={styles.brand}>
          <Link to="/">shrnk</Link>
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
  );
}

export default Navbar;
