const GlobalProvider = require("./src/utils/cursorContext").GlobalProvider
const React = require("react")
const Layout = require("./src/layouts/page").default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <GlobalProvider>
      <Layout {...props}>{element}</Layout>
    </GlobalProvider>
  )
}
