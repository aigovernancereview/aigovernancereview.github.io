import React from 'react';
import { Link } from 'gatsby';

import Container from '../../components/Container';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SEO from '../../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="Page not found" />
    <Layout>
      <Section isWhite>
        <Container>
          <h1>Sorry, page not found</h1>
          <p>The page you&apos;re trying to access doesn&apos;t exist.</p>
          <p>
            {`Need help? Please contact us at `}
            <a href="mailto:globalaigovernance@gmail.com">globalaigovernance@gmail.com</a>
            {` or `}
            <Link to="/">return to homepage</Link>
          </p>
        </Container>
      </Section>
    </Layout>
  </>
);

export default NotFoundPage;
