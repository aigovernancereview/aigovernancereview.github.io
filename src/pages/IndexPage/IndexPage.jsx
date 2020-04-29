import React from 'react';

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SEO from '../../components/SEO';
import Spacer from '../../components/Spacer';

import PDF from '../../assets/aiGovernanceIn2019.pdf';

const IndexPage = () => (
  <>
    <SEO title="AI Governance in 2019: A Year in Review Observations of 50 Global Experts" />
    <Layout>
      <Section isWhite>
        <article>
          <p>
            The impact of emerging technologies might prove to be an inflection point in human
            history that will continually affect virtually all aspects of society over the coming
            decades. Under these conditions, AI is the linchpin accelerating and amplifying the
            development of all fields of research. With the rapid advancement of machine learning in
            recent years, the governance of artificial intelligence has gradually come under the
            spotlight. It was once possible to keep track of all the research institutes,
            conferences and policy developments in artificial intelligence. Yet in 2019, this became
            an arduous task for researchers and policymakers.
          </p>
          <p>
            To separate the signal from the noise for interested stakeholders, we invited some
            world-renowned experts to review the progress in AI governance over 2019.
          </p>
          <Spacer />
        </article>
      </Section>
      <Section>
        <article>
          <h2>About the report</h2>
          <p>
            The report was contributed by 50 experts from 44 institutions, including AI scientists,
            academic researchers, industry representatives, policy experts, and others. This group
            of experts covers a wide range of regional developments and perspectives, including
            those in the United States, Europe and Asia. For a full list of contributors,
            {` `}
            <a href={PDF} download title="Download to read the report">
              see the report
            </a>
            .
          </p>
        </article>
        <Spacer />
        <article>
          <h2>Feedback</h2>
          <p>
            We welcome questions and comments about the report. Please send them to the executive
            editors Li Hui and Brian Tse at
            {` `}
            <a href="mailto:globalaigovernance@gmail.com">globalaigovernance@gmail.com</a>
          </p>
        </article>
        <Spacer />
      </Section>
    </Layout>
  </>
);

export default IndexPage;
