import React from 'react';
import { bool, string } from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ label, to, isDownload }) => (
  <a className={styles.Button} href={to} role="button" download={isDownload}>
    {label}
  </a>
);

Button.propTypes = {
  label: string.isRequired,
  to: string.isRequired,
  isDownload: bool,
};

Button.defaultProps = {
  isDownload: false,
};

export default Button;
