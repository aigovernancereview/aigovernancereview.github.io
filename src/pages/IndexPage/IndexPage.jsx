import React from 'react';

import Layout from '../../components/Layout';
import Quote from '../../components/Quote';
import Section from '../../components/Section';
import SEO from '../../components/SEO';
import Spacer from '../../components/Spacer';

import PDF_2020 from '../../assets/AI-Governance-in-2020.pdf';
import PDF_2019 from '../../assets/AI-Governance-in-2019.pdf';
import PDF_2019_CN from '../../assets/2019全球人工智能治理年度观察中文版.pdf';

const IndexPage = () => (
  <>
    <SEO title="AI Governance in 2020 - A Year in Review: Observations from 52 Global Experts" />
    <Layout>
      <Section isWhite>
        <Spacer />
        <article>
          <Quote
            quote="When people pull together, nothing is too heavy to be lifted."
            author="The Baopuzi《抱朴子》"
          />
          <p>
            The pandemic in 2020 shows that global catastrophes are live possibilities. It is a
            warning shot that should encourage foresight and cooperation for improving the
            collective resilience of humanity. In the coming decades, the governance of AI might be
            one of the most important global issues. We believe that global and interdisciplinary
            insights are critical for guiding the development of AI for the common good.
          </p>
          <Spacer />
        </article>
      </Section>
      <Section>
        <article>
          <h2>About the report</h2>
          <p>
            The report was contributed by 52 experts from 47 institutions, including AI scientists,
            academic researchers, industry representatives, policy experts, and others. This group
            of experts covers a wide range of regional developments and perspectives, including
            those in the United States, Europe and Asia.
          </p>
          <p>
            {'For a full list of contributors, see the '}
            <a href={PDF_2020} download title="Download to read the report in English">
              report
            </a>
            .
          </p>
          <Spacer />
          <h3>Previous reports</h3>
          <p>
            You can also view the report from 2019 (
            <a href={PDF_2019} download title="Download to read the report in English">
              English version
            </a>
            {` / `}
            <a href={PDF_2019_CN} download title="下载中文版">
              中文版
            </a>
            ).
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
