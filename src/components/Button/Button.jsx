import React from 'react';
import cn from 'classnames';
import { bool, string } from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ label, to, isDownload, className }) => (
  <a className={cn(styles.Button, className)} href={to} role="button" download={isDownload}>
    {label}
  </a>
);

Button.propTypes = {
  label: string.isRequired,
  to: string.isRequired,
  isDownload: bool,
  className: string,
};

Button.defaultProps = {
  isDownload: false,
  className: '',
};

export default Button;
