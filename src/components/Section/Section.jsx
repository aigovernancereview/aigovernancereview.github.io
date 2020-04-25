import React from 'react';
import { arrayOf, node, oneOfType, bool } from 'prop-types';
import cn from 'classnames';

import Container from '../Container';
import styles from './Section.module.scss';

const Section = ({ children, isWhite }) => (
  <section className={cn(styles.Section, { [styles.SectionWhite]: isWhite })}>
    <Container>{children}</Container>
  </section>
);

Section.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  isWhite: bool,
};

Section.defaultProps = {
  isWhite: false,
};

export default Section;
