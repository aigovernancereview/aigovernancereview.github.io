module.exports = {
  siteMetadata: {
    title: `AI Governance in 2019: A Year in Review Observations of 50 Global Experts`,
    description: `The emergence of AI governance issues has attracted the attention of 
      experts in the field of traditional humanities and social sciences, which helped 
      open up new research directions. Read the report here.`,
    author: `Shanghai Institute for Science of Science`,
  },
  pathPrefix: `/production`,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
