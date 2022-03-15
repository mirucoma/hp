import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import Benefit from "../components/benefit"

export default function Home() {
  const textColor = css({
    color: "red",
  })

  return (
    <>
      <Layout>
        <Benefit />
      </Layout>
    </>
  )
}
