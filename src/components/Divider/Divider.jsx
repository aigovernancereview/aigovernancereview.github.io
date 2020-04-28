import React from 'react';
import cn from 'classnames';
import { oneOf } from 'prop-types';

import styles from './Divider.module.scss';

const getClassNames = (color) =>
  cn(styles.Divider, {
    [styles.DividerBlue]: color === 'brand',
  });

const Divider = ({ color }) => <hr className={getClassNames(color)} />;

Divider.propTypes = {
  color: oneOf(['', 'brand']),
};

Divider.defaultProps = {
  color: '',
};

export default Divider;
