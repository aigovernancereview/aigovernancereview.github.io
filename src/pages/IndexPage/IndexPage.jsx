import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="AI Governance in 2019: A Year in Review Observations of 50 Global Experts" />
    <p>
      The impact of emerging technologies might be a seminal inflection point in human history that
      will continually impact all aspects of society over the coming decades. In that, AI is the
      linchpin accelerating and amplifying the development of all the fields of research. With the
      rapid development of machine learning in recent years, the governance of the technology has
      gradually come under the spotlight. It was once possible to keep track of all the research
      institutes, conferences and policy developments. In 2019, this became an arduous task for
      researchers and policymakers. To help separate the signal from the noise for interested
      stakeholders, we decided to invite some of the world renowned experts to review the key
      progress in AI governance during the year.
    </p>
    <h2>About the report</h2>
    <p>
      The report was contributed by 50 experts from 44 institutions, including AI scientists,
      academic researchers, industry representatives, policy experts, and others. This group of
      experts covers a wide range of regional developments and perspectives, including those in the
      United States, Europe and Asia. For a full list of contributors, see the report.
    </p>
    <h2>Feedback</h2>
    <p>
      {`
        We welcome questions and comments about the report. Please send them to the executive editors
        Li Hui and Brian Tse at 
      `}
      <a href="mailto:globalaigovernance@gmail.com">globalaigovernance@gmail.com</a>
    </p>
  </Layout>
);

export default IndexPage;
