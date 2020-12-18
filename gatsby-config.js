module.exports = {
  siteMetadata: {
    title: `Xminer`,
    description: `Gotowe koparki kryptowalut w różnych konfiguracjach, hosting, serwis, know-how, kopanie kryptowalut z Xminer.`,
    author: `@kryptonum`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
