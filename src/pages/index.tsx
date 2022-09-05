import Head from "../components/head"
import Header from "../components/header"
import Benefit from "../components/benefit"
import Concept from "../components/concept"
import Advantage from "../components/advantage"
import Problem from "../components/problem"
import CustomerVoice from "../components/customerVoice"
import Detail from "../components/detail"
import QandA from "../components/qandA"
import Price from "../components/price"
import HowToPay from "../components/howToPay"
import HowToConsul from "../components/howToConsul"
import Announcements from "../components/announcements"
import Footer from "../components/footer"

import DetailActiveSlideProvider from "../hooks/DetailActiveSlide/detailActiveSlideProvider"
import HomepageScrollStoreProvider from "../hooks/HomepageScrollStore/HomepageScrollStoreProvider"

export default function Home() {
  return (
    <>
      <DetailActiveSlideProvider>
        <HomepageScrollStoreProvider>
          <Head title="ミルコマ" description="見るだけのコマ管理ツール">
            <Header />
            <Benefit />
            <Concept />
            <Advantage />
            <Problem />
            <CustomerVoice />
            <Detail />
            <QandA />
            <Price />
            <HowToPay />
            <HowToConsul />
            <Announcements />
            <Footer />
          </Head>
        </HomepageScrollStoreProvider>
      </DetailActiveSlideProvider>
    </>
  )
}
