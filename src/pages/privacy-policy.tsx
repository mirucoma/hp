import { css } from "@emotion/react"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Head from "../components/head"
import Header from "../components/header"

export default function Home({ data }: any) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  const wrapper = css({
    h1: {
      fontSize: "32px",
    },
    h2: {
      fontSize: "24px",
    },
    h3: {
      fontSize: "21px",
    },
    h5: {
      fontSize: "13.9px",
    },
    h6: {
      fontSize: "12.9px",
    },
    "h4, p, li": {
      fontSize: "16px",
    },
    code: {
      fontSize: "13.6px",
    },

    width: "80%",
    margin: "0 auto",
    paddingTop: "64px",
  })

  console.log({ html })
  return (
    <Head
      title="プライバシーポリシー - ミルコマ"
      description="見るだけのコマ管理ツール"
    >
      <Header />
      <div css={wrapper} dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </Head>
  )
}

export const getPrivacyPolicyQuery = graphql`
  query getPrivacyPolicyQuery {
    markdownRemark(frontmatter: { slug: { eq: "/privacy-policy" } }) {
      html
    }
  }
`
