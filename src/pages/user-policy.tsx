import React from "react"
import Head from "../components/head"
import Header from "../components/header"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Footer from "../components/footer"

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
  return (
    <>
      <Head title="利用規約 - ミルコマ" description="見るだけのコマ管理ツール">
        <Header />
        <div css={wrapper} dangerouslySetInnerHTML={{ __html: html }} />
      </Head>
      <Footer />
    </>
  )
}

export const getUserPolicyQuery = graphql`
  query getUserPolicyQuery {
    markdownRemark(frontmatter: { slug: { eq: "/user-policy" } }) {
      html
    }
  }
`
