const path = require(`path`)
var slugify = require("slugify")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = async ({ page, actions: { deletePage } }) => {
    if (page.path.match(/^\/demo/)) {
      deletePage(page)
    }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  const categoryTemplate = path.resolve(`src/layouts/category.js`)
  const result = await graphql(`
    query PostsAndCategoriesQuery {
      posts: allDatoCmsPost {
        nodes {
          slug
          id
          postCategory {
            categoryName
          }
        }
      }
      categories: allDatoCmsCategory {
        nodes {
          categoryName
          id
        }
      }
    }
  `)

  result.data.posts.nodes.forEach(article => {
    const slugifiedTitle = slugify(article.slug, {
      lower: true,
    })
    createPage({
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: article.id,
        name: article.postCategory.categoryName,
      },
    })
  })

  result.data.categories.nodes.forEach(category => {
    const slugifiedTitle = slugify(category.categoryName, {
      lower: true,
    })
    createPage({
      path: `blog/kategoria/${slugifiedTitle}`,
      component: categoryTemplate,
      context: {
        categoryName: slugifiedTitle,
        id: category.id,
      },
    })
  })
}
