import React from 'react';

import Button from '../Button';
import Container from '../Container';
import PDF from '../../assets/aiGovernanceIn2019.pdf';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <Container>
      <h1 className={styles.Header__Title}>AI Governance in 2019</h1>
      <h2 className={styles.Header__Subtitle}>
        A Year in Review Observations of 50 Global Experts
      </h2>
      <div className={styles.Header__CallToAction}>
        <Button label="Download Report" to={PDF} isDownload />
      </div>
    </Container>
  </header>
);

export default Header;
