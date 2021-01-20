import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { formatDate } from "../../../../utils/DateUtils"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import ArticleDetails from "../ArticleDetails"
import { icons } from "./catogoriesData"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { HiArrowNarrowRight } from "react-icons/hi"
import {
  articlesWrapperTransition,
  transition,
} from "../../../Styles/Animations"
import useWindowSize from "../../../../utils/UseWindowSize"
import { DragSlider } from "../../../DragSlider/DragSlider"

const CategoriesStyles = styled.section`
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => (margin ? margin : "119px auto 0")};
  padding: 67px 0 120px;
  > div {
    max-width: 1440px;
    margin: 0 122px;
  }
  @media only screen and (max-width: 1182px) {
    > div {
      margin: 0 60px;
    }
  }
  @media only screen and (max-width: 820px) {
    > div {
      margin: 0;
      padding: 0 30px;
    }
  }
`

const NavigationStyles = styled(motion.ul)`
  display: grid;
  width: 100%;
  background-color: var(--light-blue);
  padding: 19px 78px;
  border-radius: 5px;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
  grid-gap: 24px 58px;
  list-style-type: none;
  @media only screen and (max-width: 1182px) {
    padding: 19px 32px;
    grid-gap: 24px 32px;
  }
`

const ListItemStyles = styled(motion.li)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 148px;
  max-width: 180px;

  @media only screen and (max-width: 874px) {
    max-width: unset;
    width: 200px;
    margin-right: 50px;
  }
  button {
    width: 100%;
    height: 100%;
    padding: 16px 18px 10px;
    border-radius: 5px;
    border: none;
    box-shadow: ${({ active }) =>
      active ? "0 4px 20px 0 rgba(0, 0, 0, 0.08)" : ""};
    background-color: ${({ active }) =>
      active ? "var(--white)" : "var(--light-blue)"};
    transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      box-shadow 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:focus,
    &:active {
      outline: none;
      box-shadow: ${({ active }) => (active ? "" : "0 0 0 2px var(--blue)")};
      path {
        fill: var(--blue);
      }
    }
    &:hover {
      background-color: var(--white);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08);
      path {
        fill: var(--blue);
      }
    }
  }

  svg {
    path {
      fill: ${({ active }) => (active ? "var(--blue)" : "")};
      transition: fill 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
  }
`

const CategoriesNavigation = ({ items, activeCategory, setActiveCategory }) => {
  const width = useWindowSize()
  return (
    <>
      {width < 874 ? (
        <DragSlider
          bounceStiffness={200}
          bounceDamping={30}
          padding="19px 32px"
          bg="var(--light-blue)"
          layout
          leftAnchor={150}
          radius="5px"
        >
          {items.map(item => {
            const categoryIcon =
              icons[item.categoryName] === undefined
                ? Object.values(icons)[0]
                : icons[item.categoryName]
            return (
              <ListItemStyles
                layout
                active={activeCategory === item.categoryName}
                key={item.categoryName}
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(item.categoryName)}
                  layout
                >
                  {categoryIcon}
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    lineHeight="normal"
                    margin="13px 0 0"
                    textTransform="capitalize"
                    color={
                      activeCategory === item.categoryName
                        ? "var(--blue)"
                        : "var(--black)"
                    }
                  >
                    {item.categoryName.split(" ")[0]}
                  </Text>
                </motion.button>
              </ListItemStyles>
            )
          })}
        </DragSlider>
      ) : (
        <NavigationStyles layout>
          {items.map(item => {
            const categoryIcon =
              icons[item.categoryName] === undefined
                ? Object.values(icons)[0]
                : icons[item.categoryName]
            return (
              <ListItemStyles
                layout
                active={activeCategory === item.categoryName}
                key={item.categoryName}
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(item.categoryName)}
                  layout
                >
                  {categoryIcon}
                  <Text
                    fontSize="16px"
                    fontWeight="bold"
                    lineHeight="normal"
                    margin="13px 0 0"
                    textTransform="capitalize"
                    color={
                      activeCategory === item.categoryName
                        ? "var(--blue)"
                        : "var(--black)"
                    }
                  >
                    {item.categoryName.split(" ")[0]}
                  </Text>
                </motion.button>
              </ListItemStyles>
            )
          })}
        </NavigationStyles>
      )}
    </>
  )
}

const ActiveArticlesStyles = styled(motion.div)`
  width: 100%;
  margin-top: 49px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 43px 61px;

  .gatsby-image-wrapper {
    height: 216px;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1328px) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    .gatsby-image-wrapper {
      height: 189px;
    }
  }

  > article {
    position: relative;
    width: 100%;
    max-width: 440px;
    @media only screen and (max-width: 662px) {
      max-width: 100%;
    }
    > a {
      text-decoration: none;

      &:focus-visible {
        h3 {
          box-shadow: 0 0 0 2px var(--secondary);
          outline: none;
          &:after {
            content: none !important;
          }
        }
      }

      &:hover {
        h3 {
          color: var(--secondary);
          &:after {
            transform: scaleX(1);
          }
        }
      }
      h3 {
        position: relative;
        display: inline-block;

        &:after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -2px;
          background-color: var(--secondary);
          height: 2px;
          width: calc(100%);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
      }
    }
  }

  span.tag {
    position: absolute;
    z-index: 1;
    left: 12px;
    top: 12px;
    border-radius: 5px;
    background-color: var(--light-aqua);
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px 9px;
    color: var(--primary);
    pointer-events: none;
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  max-width: 750px;
  max-height: 388px;
  border-radius: 5px;
  overflow: hidden;

  > a {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0;
    background: linear-gradient(
        93.11deg,
        #29abe2 2.72%,
        rgba(255, 255, 255, 0) 99.67%
      ),
      #2ec5ce;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .gatsby-image-wrapper {
    opacity: 1;
    z-index: 1;
    width: 100%;
  }
`

const ActiveCategoryArticles = ({ activeCategory, items }) => {
  const [filteredArticles, setFilteredArticles] = useState(items)
  useEffect(() => {
    if (activeCategory === "wszystkie") {
      setFilteredArticles(items)
    } else {
      setFilteredArticles(
        items.filter(
          article =>
            article.postCategory.categoryName.toLowerCase() ===
            activeCategory.toLowerCase()
        )
      )
    }
  }, [activeCategory, items])

  const width = useWindowSize()
  return (
    <AnimatePresence>
      <ActiveArticlesStyles
        layout
        variants={articlesWrapperTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {filteredArticles.map(item => (
          <motion.article
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          >
            <ImageWrapper layout style={{ overflow: "hidden" }}>
              <Link to={`/blog/${item.slug}`}>
                <motion.span whileHover={{ x: 3 }} whileTap={{ x: 6 }}>
                  <HiArrowNarrowRight size="54px" color="var(--light-aqua)" />
                </motion.span>
              </Link>
              <Img fluid={item.coverImage.fluid} alt={item.coverImage.alt} />
            </ImageWrapper>
            <ArticleDetails
              date={formatDate(item.date)}
              readingTime={item.readingTime}
              dateWithoutDot
              margin="12px 0 0"
              layout
              smaller
            />
            <Link layout to={`/blog/${item.slug}`}>
              <Text
                as="h3"
                fontSize={width < 740 ? "15px !important" : "18px"}
                fontWeight="bold"
                margin="4px 0 0"
                lineHeight="normal"
              >
                {item.title}
              </Text>
            </Link>
            <motion.span layout className="tag">
              {item.postCategory.categoryName}
            </motion.span>
          </motion.article>
        ))}
      </ActiveArticlesStyles>
    </AnimatePresence>
  )
}

const CategoriesSections = ({
  categories,
  articles,
  defaultActiveCategory,
  setDefaultActiveCategory,
  margin,
}) => {
  const [filteredCategories, setFilteredCategories] = useState(categories)

  useEffect(() => {
    const defaultCategories = [{ categoryName: "wszystkie", id: "wszystkie" }]
    const articleCategories = articles.map(article =>
      article.postCategory.categoryName.toLowerCase()
    )
    const uniqueArticleNames = [...new Set(articleCategories.map(x => x))].map(
      category => ({
        categoryName: category.toLowerCase(),
        id: category,
      })
    )

    uniqueArticleNames.map(category => {
      categories.filter(originalCategory => {
        if (
          category.categoryName.toLowerCase() ===
          originalCategory.categoryName.toLowerCase()
        )
          category.id = originalCategory.id
      })
    })

    setFilteredCategories([...defaultCategories, ...uniqueArticleNames])
  }, [])
  return (
    <CategoriesStyles margin={margin}>
      <AnimateSharedLayout type="crossfade">
        <Flex layout width="100%" direction="column">
          <CategoriesNavigation
            items={filteredCategories}
            layout
            activeCategory={defaultActiveCategory}
            setActiveCategory={setDefaultActiveCategory}
          />
          <ActiveCategoryArticles
            items={articles}
            activeCategory={defaultActiveCategory}
          />
        </Flex>
      </AnimateSharedLayout>
    </CategoriesStyles>
  )
}

export default CategoriesSections
