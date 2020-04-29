import React from 'react';

import Button from '../Button';
import Container from '../Container';
import Divider from '../Divider';
import PDF from '../../assets/AI-Governance-in-2019.pdf';

import backgroundImg from '../../images/background.jpg';
import styles from './Hero.module.scss';

const Hero = () => (
  <header className={styles.Hero} style={{ backgroundImage: `url(${backgroundImg})` }}>
    <Container>
      <article className={styles.Hero__HeadingGroup}>
        <h1 className={styles.Hero__Heading}>AI Governance in 2019</h1>
        <Divider color="brand" />
        <h2 className={styles.Hero__Subheading}>
          A Year in Review: Observations from 50 Global Experts
        </h2>
        <Divider color="brand" />
        <div className={styles.Hero__CallToAction}>
          <Button label="Download Report" to={PDF} isDownload />
        </div>
      </article>
    </Container>
  </header>
);

export default Hero;
