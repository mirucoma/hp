import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from "swiper/types"

import { plans, slideData } from "../datas/content"

import useDetailActiveSlide from "../hooks/DetailActiveSlide/useDetailActiveSlide"
import useHomepageScrollStore from "../hooks/HomepageScrollStore/useHomepageScrollStore"


export default () => {
  const [swiper, setSwiper] = useState<SwiperType>()
  const { activeDetailSlide, setActiveDetailSlide } = useDetailActiveSlide()

  const { detailRef } = useHomepageScrollStore()

  const handleChangeActive = (index: number) => {
    setActiveDetailSlide(index)
  }

  useEffect(() => {
    swiper?.slideTo(0, 500)
  }, [activeDetailSlide])

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
    [mq[0]]: { flexDirection: "column", gap: "16px" },
  })

  const list = css({
    backgroundColor: "white",
    width: "32%",
    maxWidth: "320px",
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

    [mq[0]]: {
      width: "100%",
      backgroundColor: "transparent",
      boxShadow: "none",
      ul: {
        display: "flex",
        gap: "16px",
        overflowX: "scroll",
      },
      li: {
        fontSize: "1rem",
        color: "gray",
        padding: "8px",
        border: "1px solid gray",
        borderRadius: "14px",
        flex: " 0 0 auto",
      },
    },
  })

  const activePlan = css({
    borderLeft: "4px solid",
    borderColor: color.primary.main + "!important",
    color: color.primary.main + " !important",
  })

  const sliderWrapper = css({
    backgroundColor: "white",
    padding: "16px",
    width: "68%",
    maxWidth: "880px",
    height: "auto",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    [mq[0]]: {
      width: "100%",
      padding: "0px",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  })

  const slideImage = css({
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    //border: "1px solid gray",
    [mq[0]]:{ width: "93%", margin: "0 auto"}
  })

  const slideTextWrapper = css({
    p: { fontSize: "2rem" },
    textAlign: "left",
    paddingBottom: "24px",
    borderBottom: "1px dashed rgba(0, 0, 0, 0.12)",
    marginTop: "24px",

    [mq[0]]: {
      p: { fontSize: "1rem" },
      backgroundColor: "white",
      borderRadius: "16px",
      padding: "8px",
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      border: "none",
      width: "93%",
      margin: "16px auto",
    },
  })

  const slideTitle = css({
    display: "inline",
    borderBottom: "4px double",
    borderColor: color.primary.main,
  })

  const slideText = css({
    padding: "8px",
  })

  const buttonWraopped = css({
    textAlign: "right",
    ".swiper-button-disabled": {
      color: "gray",
    },
    marginTop: "8px",
  })
  const button = css({
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none",
    appearance: "none",
    fontSize: "2rem",
    fontWeight: "900",
    border: "1px solid",
    borderRadius: "8px",
    padding: "4px 16px",
    marginLeft: "8px",
    color: color.primary.main,
    margin:"8px"
  })

  return (
    <>
      <div ref={detailRef} css={detailWrapper}>
        <p css={detailTitle}>機能紹介</p>
        <div css={detailBody}>
          <div css={list}>
            <ul>
              {plans.map((key: string, index: number) => (
                <li
                  css={index == activeDetailSlide ? activePlan : ""}
                  onClick={() => handleChangeActive(index)}
                  key={index}
                >
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
              {slideData[activeDetailSlide].map((data, index) => (
                <SwiperSlide key={index}>
                  <div css={slideImage}>{data.image}</div>

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
