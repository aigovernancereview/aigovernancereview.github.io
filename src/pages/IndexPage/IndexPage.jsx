import React from 'react';

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import SEO from '../../components/SEO';
import Spacer from '../../components/Spacer';

import PDF from '../../assets/AI-Governance-in-2019.pdf';
import PDF_CN from '../../assets/2019全球人工智能治理年度观察中文版.pdf';

const IndexPage = () => (
  <>
    <SEO title="AI Governance in 2019 - A Year in Review: Observations from 50 Global Experts" />
    <Layout>
      <Section isWhite>
        <article>
          <p>
            Although full of challenges, the year of 2020 was marvelous for Artificial Intelligence (AI).
          </p>
          <p>
            The outbreak and spread of the COVID-19 pandemic significantly impacted the economic and social
            development of countries around the world. Policymakers and researchers around the world had
            to hurriedly put aside all their plans and spared no effort to deal with this disruptive new issue.
            As we see, AI governance is a sub-topic under this major issue.
          </p>
          <Spacer />
        </article>
      </Section>
      <Section>
        <article>
          <h2>About the report</h2>
          <p>
            The report was contributed by 50 experts from 47 institutions, including AI scientists,
            academic researchers, industry representatives, policy experts, and others. This group
            of experts covers a wide range of regional developments and perspectives, including
            those in the United States, Europe and Asia. For a full list of contributors, 
            see the report (
            <a href={PDF} download title="Download to read the report in English">
              English version
            </a>
            {` / `}
            <a href={PDF_CN} download title="下载中文版">
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
