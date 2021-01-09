import { graphql } from "gatsby"
import React from "react"
import PrivacyPolicySection from "../components/PrivacyPolicyComponents/PrivacyPolicySection"

const PrivacyPolicy = ({ data }) => {
  return (
    <PrivacyPolicySection
      title="Rodo"
      subtitle="Polityka przetwarzania danych osobowych"
      content={
        data.datoCmsPrivacyPolicy.policyPrivacyContentNode.childMarkdownRemark
          .html
      }
      margin="246px 158px 125px 122px"
    />
  )
}

export const policyPrivacyQuery = graphql`
  query policyQuery {
    datoCmsPrivacyPolicy {
      policyPrivacyContentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export default PrivacyPolicy
