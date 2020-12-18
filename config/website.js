module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "Xminer", // Navigation and Site Title
  titleTemplate: "%s | Xminer",
  titleAlt: "Xminer koparki kryptowalut", // Title for JSONLD
  description:
    "Gotowe koparki kryptowalut w różnych konfiguracjach, hosting, serwis, know-how, kopanie kryptowalut z Xminer.",
  headline: "Xminer - gotowe koparki kryptowalut w różnych konfiguracjach.", // Headline for schema.org JSONLD
  url: "https://www.xminer.pl", // Domain of your site. No trailing slash!
  siteLanguage: "pl", // Language Tag on <html> element
  logo: "/images/gatsby-astronaut.png", // Used for SEO
  ogLanguage: "pl_PL", // Facebook Language

  // JSONLD / Manifest
  favicon: "/images/favicon.png", // Used for manifest favicon generation
  shortName: "Xminer", // shortname for manifest. MUST be shorter than 12 characters
  author: "Xminer", // Author for schemaORGJSONLD
  themeColor: "#F6F9FB",
  backgroundColor: "#111C3B",
  twitter: "@xminerpl", // Twitter Username
  facebook: "xminerpl", // Facebook Site Name
  // googleAnalyticsID: "UA-47519312-7",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}
