import React from 'react';

import Button from '../Button';
import Container from '../Container';
import Divider from '../Divider';
import PDF_2020 from '../../assets/AI-Governance-in-2020.pdf';
import PDF_2020_CN from '../../assets/2019全球人工智能治理年度观察中文版.pdf';

import styles from './Hero.module.scss';

const Hero = () => (
  <header className={styles.Hero}>
    <Container>
      <article className={styles.Hero__HeadingGroup}>
        <h1 className={styles.Hero__Heading}>AI Governance in 2020</h1>
        <Divider color="brand" />
        <h2 className={styles.Hero__Subheading}>
          A Year in Review: Observations from 52 Global Experts
        </h2>
        <Divider color="brand" />
        <strong>Download report</strong>
        <div className={styles.Hero__CallToAction}>
          <Button className={styles.Hero__Button} label="English version" to={PDF_2020} isDownload />
          <Button className={styles.Hero__Button} label="下载中文版" to={PDF_2020_CN} isDownload />
        </div>
      </article>
    </Container>
  </header>
);

export default Hero;
