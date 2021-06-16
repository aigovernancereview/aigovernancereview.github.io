import React from 'react';
import { string } from 'prop-types';
import styles from './Quote.module.scss';

const Quote = ({ quote, author}) => (
  <aside className={styles.Quote}>
    <blockquote className={styles.Quote__Blockquote}>
      <p>{quote}</p>
    </blockquote>
    {author && 
      <figcaption>
        — {author}
      </figcaption>
    }
  </aside>
);

Quote.propTypes = {
  quote: string.isRequired,
  author: string,
};

Quote.defaultProps = {
  author: '',
};

export default Quote;
