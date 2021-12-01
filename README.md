# AI Governance Review website

[aigovernancereview.com](https://www.aigovernancereview.com) is a [Gatsby.js](https://www.gatsbyjs.com/) static generated site hosted with [Github Pages](https://pages.github.com)

## Getting started

Prerequisites:

- [node.js](https://nodejs.org): v14
- Highly recommended:
  - [nvm](https://github.com/nvm-sh/nvm)
  - [yarn](https://yarnpkg.com)

1. Run `yarn` to install dependencies
1. Run `yarn start` to spin up the development site and start working

Note: because this is on an older version of Gatsby.js, the `node-sass` package only works on older versions of node.js. The working version I use is `v14.17.4`.

## Branches

All dev work should be done on feature branches off the `development` branch. The `master` branch is solely reserved for build files in production. As this is quite a simple site, working directly on the `development` branch is fine too.

## Deployment

When you're ready to deploy to Github Pages, checkout to the state you'd like to deploy. I usually merge back to `development` and tag the version I wish to deploy.

1. To deploy, run `yarn deploy`, which will run Gatsby.js to build the production assets and deploy to the `master` branch.
1. **Important**: you'll also need to log into GitHub settings for this page, and _manually_ change the domain from the default Github Pages domain to the custom `www.aigovernancereview.com` domain

Step 2 is a problem I've yet to find the time to fix. I think it's due to the `CNAME` file not being stored on the root folder?

## Issues

1. Every deployment changes the domain back to the default GitHub Pages domain
1. `node-sass` doesn't work on newer versions of node.js

This site is maintained by [Oly Su](https://www.github.com/olyism). 
