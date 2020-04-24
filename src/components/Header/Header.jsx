import React from 'react';

import Container from '../Container';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <Container>
      <h1 className={styles.Header__Title}>AI Governance in 2019</h1>
      <h2 className={styles.Header__Subtitle}>
        A Year in Review Observations of 50 Global Experts
      </h2>
    </Container>
  </header>
);

export default Header;
