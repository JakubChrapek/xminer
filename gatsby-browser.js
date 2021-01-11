const React = require("react")
const Layout = require("./src/layouts/page").default

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   if (location.action === "PUSH") {
//     window.setTimeout(() => window.scrollTo({ top: 0, left: 0 }), 300)
//   } else {
//     const savedPosition = getSavedScrollPosition(location)
//     window.setTimeout(() => window.scrollTo(...(savedPosition || [{top:0, left: 0}])), 300)
//   }
//   return false
// }

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
