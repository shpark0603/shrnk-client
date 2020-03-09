import React from 'react';
import { Link } from 'react-router-dom';

import heroImg from '../../assets/images/computer-and-man.svg';
import styles from './Hero.module.scss';

function HeroComponent() {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>긴 url을 짧게 줄여보세요.</h1>
        <p className={styles.description}>
          <Link to="/signup">무료로 회원가입</Link>
          하여 여러 url들을 관리해보세요. 회원가입하지 않고 줄인 url은 7일동안만
          접근가능합니다.
        </p>
      </div>
      <div className={styles.right}>
        <img src={heroImg} alt="Computer and man" className={styles.image} />
      </div>
    </div>
  );
}

export default HeroComponent;
