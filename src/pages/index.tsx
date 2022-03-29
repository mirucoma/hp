import React from "react"
import { Global, css } from "@emotion/react"
import Layout from "../components/layout"
import Benefit from "../components/benefit"
import Concept from "../components/concept"
import Advantage from "../components/advantage"
import Problem from "../components/problem"
import CustomerVoice from "../components/customerVoice"

// const global = css`
//   html {
//     font-size: 50%;
//   }

//   * {
//     margin: 0;
//     padding: 0;
//   }
// `

const global = css({
  html:{
    fontSize: "50%"
  }, 
  "*": {
  margin: "0",
  padding: "0",
}
})

export default function Home() {
  return (
    <>
    <Global styles={global}/>
      <Layout>
        <Benefit />
        <Concept />
        <Advantage />
        <Problem />
        <CustomerVoice />
      </Layout>
    </>
  )
}
