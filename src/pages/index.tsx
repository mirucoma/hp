import React from "react"
import { Global, css } from "@emotion/react"
import Layout from "../components/layout"
import Benefit from "../components/benefit"
import Concept from "../components/concept"
import Advantage from "../components/advantage"
import Problem from "../components/problem"
import CustomerVoice from "../components/customerVoice"
import Detail from "../components/detail"
import QandA from "../components/qandA"
import Price from "../components/price"
import HowToPay from "../components/howToPay"
import Announcements from "../components/announcements"
import Footer from "../components/footer"

import DetailActiveSlideProvider from "../hooks/DetailActiveSlide/detailActiveSlideProvider"
import HomepageScrollStoreProvider from "../hooks/HomepageScrollStore/HomepageScrollStoreProvider"

const global = css({
  html: {
    fontSize: "50%",
  },
  "*": {
    margin: "0",
    padding: "0",
  },
})

export default function Home() {
  return (
    <>
      <Global styles={global} />
      <DetailActiveSlideProvider>
        <HomepageScrollStoreProvider>
          <Layout>
            <Benefit />
            <Concept />
            <Advantage />
            <Problem />
            <CustomerVoice />
            <Detail />
            <QandA />
            <Price />
            <HowToPay />
            <Announcements />
            <Footer />
          </Layout>
        </HomepageScrollStoreProvider>
      </DetailActiveSlideProvider>
    </>
  )
}
