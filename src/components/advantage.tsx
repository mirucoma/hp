import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import AdvantageCard from "./advantageCard"

import "swiper/css/navigation"
import "swiper/css/pagination"

export default () => {

  const advantageTitleWrapper = css({
    width: "100%",
    textAlign: "center",
    backgroundColor: color.primary.light,
  })

  const advantageTitle = css({
    fontSize: "3rem",
    padding: "24px",
  })

  const cardWrapper = css({
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
    width: "100%",
    [mq[0]]: { display: "none" },
    padding: "56px 0",
  })

  const sliderWrapper = css({
    display: "none",
    [mq[0]]: { display: "block", width: "380px", margin: "0 auto" },
  })

  return (
    <>
      <div css={advantageTitleWrapper}>
        <p css={advantageTitle}>ああああああああああああああああああああ</p>
        <div css={cardWrapper}>
          <AdvantageCard
            title="入退室プラン"
            chips={["入退室機能", "スマホアプリ"]}
            img="https://placehold.jp/280x140.png"
            points={[
              "入退室の通知で保護者に安心をお届けします。",
              "入退室で重要なアプリへの通知ができます。",
              "業界最安料金の税込110円",
            ]}
          />
          <AdvantageCard
            title="メッセージプラン"
            chips={["メッセージ機能", "お知らせ機能", "スマホアプリ"]}
            img="https://placehold.jp/280x140.png"
            points={[
              "個別送信やグループを自由に作成、全員送信であなたの連絡業務を大幅に効率化します。",
              "メッセージはアプリに通知が来るので、気づかずに返信が遅れてしまうことはありません。",
            ]}
          />
          <AdvantageCard
            title="請求書プラン"
            chips={["請求書機能", "スマホアプリ"]}
            img="https://placehold.jp/280x140.png"
            points={[
              "保護者アプリへ請求書の明細を送信することで面倒な封入作業や郵送コストを０に。",
              "月謝管理機能はリスト表示で見やすく、請求金額の設定や細かい割引にも対応。",
            ]}
          />
        </div>

        <Swiper
          css={sliderWrapper}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <AdvantageCard
              title="入退室プラン"
              chips={["入退室機能", "スマホアプリ"]}
              img="https://placehold.jp/280x140.png"
              points={[
                "入退室の通知で保護者に安心をお届けします。",
                "入退室で重要なアプリへの通知ができます。",
                "業界最安料金の税込110円",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageCard
              title="メッセージプラン"
              chips={["メッセージ機能", "お知らせ機能", "スマホアプリ"]}
              img="https://placehold.jp/280x140.png"
              points={[
                "個別送信やグループを自由に作成、全員送信であなたの連絡業務を大幅に効率化します。",
                "メッセージはアプリに通知が来るので、気づかずに返信が遅れてしまうことはありません。",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageCard
              title="請求書プラン"
              chips={["請求書機能", "スマホアプリ"]}
              img="https://placehold.jp/280x140.png"
              points={[
                "保護者アプリへ請求書の明細を送信することで面倒な封入作業や郵送コストを０に。",
                "月謝管理機能はリスト表示で見やすく、請求金額の設定や細かい割引にも対応。",
              ]}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
