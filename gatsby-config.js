require("dotenv").config({
  path: `.env`,
})

const website = require("./config/website")

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Xminer koparki kryptowalut`,
        short_name: `Xminer`,
        start_url: `/`,
        background_color: `#111C3B`,
        theme_color: `#111C3B`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        enableListener: true,
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */
        interval: 500,

        /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */
        timeout: 30000,

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defined in @font-face CSS rule */
            name: "Poppins",
            /* URL to the font CSS file with @font-face definition */
            file:
              "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
          },
        ],
      },
    },
    // For google analytics add UA tag to ./config/website.js file
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: website.googleAnalyticsID,
    //   },
    // }
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix || "/",
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATOCMS_READ_API_KEY,
      },
    },
    // Must be placed at the end
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
