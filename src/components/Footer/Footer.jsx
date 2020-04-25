import React from 'react';

import Container from '../Container';
import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.Footer}>
    <Container>
      {`This site is maintained by `}
      <a className={styles.Footer__Link} href="https://www.github.com/olyism">
        Oly Su
      </a>
    </Container>
  </footer>
);

export default Footer;
