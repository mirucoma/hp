import React, { useState } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType }  from "swiper/types"

type slideDataType = {
  [key: number]: Array<{
    image: string
    title: string
    detail: string
  }>
}

const slideKeys = ["入退室管理プラン", "メッセージプラン", "請求書管理プラン"]
const slideData: slideDataType = [
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "入退室履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "メッセージ履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
  [
    {
      image: "https://placehold.jp/880x443.png",
      title: "請求書履歴",
      detail:
        "入退室履歴では生徒1人1人の滞在時間の把握やいつ来ていたかがわかるので月謝の回数確認に重宝します。また、入退室の履歴を編集することができ、間違って入室や退室してしまった際には後から変更をすることができます。",
    },
    {
      image: "https://placehold.jp/880x443.png",
      title: "test",
      detail: "test",
    },
  ],
]
export default () => {
  const [swiper, setSwiper] = useState<SwiperType>()
  const [active, setActive] = useState<number>(0)

  const handleChangeActive = (index:number) => {
    setActive(index)
    swiper?.slideTo(0,500)
  }

  const detailWrapper = css({
    backgroundColor: color.primary.light,
    textAlign: "center",
    padding: "16px",
  })

  const detailTitle = css({
    fontSize: "3rem",
    padding: "24px",
  })

  const detailBody = css({
    display: "flex",
    justifyContent: "center",
    gap: "48px",
  })

  const list = css({
    backgroundColor: "white",
    width: "30%",
    textAlign: "left",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    ul: {
      listStyle: "none",
    },
    li: {
      fontSize: "2rem",
      padding: "24px",
      marginTop: "16px",
    },
    "li:hover": {
      backgroundColor: color.primary.light,
    },
  })

  const activePlan = css({
    borderLeft: "4px solid",
    borderColor: color.primary.main,
    color: color.primary.main,
  })

  const sliderWrapper = css({
    backgroundColor: "white",
    padding: "16px",
    maxWidth: "880px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  })

  const slideTextWrapper = css({
    p: { fontSize: "2rem" },
    textAlign: "left",
    paddingBottom: "24px",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.12)",
  })

  const slideTitle = css({
    display: "inline",
    borderBottom: "4px double",
    borderColor: color.primary.main,
  })

  const slideText = css({
    padding: "8px"
  })

  const buttonWraopped = css({
    textAlign: "right",
    ".swiper-button-disabled": {
      color: "gray",
    },
    marginTop: "8px"
  })
  const button = css({
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    fontSize: "1.7rem",
    border: "1px solid",
    padding: "4px",
    marginLeft: "8px",
    color: color.primary.main,
  })

  return (
    <>
      <div css={detailWrapper}>
        <p css={detailTitle}>機能紹介</p>
        <div css={detailBody}>
          <div css={list}>
            <ul>
              {/* <li>入退室管理プラン</li>
              <li>メッセージプラン</li>
              <li>請求書管理プラン</li> */}
              {slideKeys.map((key: string, index: number) => (
                <li css={index == active ? activePlan : ""} onClick={() => handleChangeActive(index)} key={index}>
                  {key}
                </li>
              ))}
            </ul>
          </div>

          <div css={sliderWrapper}>
            <Swiper
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              spaceBetween={50}
              pagination={{ clickable: true }}
              onSwiper={data => setSwiper(data)}
            >
              {slideData[active].map((data, index) => (
                <SwiperSlide key={index}>
                  <img src={data.image} alt="" />

                  <div css={slideTextWrapper}>
                    <p css={slideTitle}>{data.title}</p>
                    <p css={slideText}>{data.detail}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div css={buttonWraopped}>
              <button className="prev" css={button}>
                ←前へ
              </button>
              <button className="next" css={button}>
                次へ→
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
