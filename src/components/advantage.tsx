import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import ArrowImage from "../../static/images/arrow.png"
import "swiper/css"

import AdvantageCard from "./advantageCard"

import { benefitData } from "../datas/content"

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
    ".swiper-button-next": {
      content: `url(${ArrowImage})`,
      backgroundColor: "gray",
      padding: "4px",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
    },

    ".swiper-button-prev": {
      content: `url(${ArrowImage})`,
      backgroundColor: "gray",
      padding: "4px",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      transform: "rotate(180deg)",
    },
  })

  return (
    <>
      <div css={advantageTitleWrapper}>
        <p css={advantageTitle}>ああああああああああああああああああああ</p>
        <div css={cardWrapper}>
          {benefitData.map((data, index) => (
            <AdvantageCard
              key={index}
              title={data.title}
              chips={data.chips}
              img={data.image}
              points={data.points}
            />
          ))}
        </div>

        <Swiper
          css={sliderWrapper}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
        >
          {benefitData.map((data, index) => (
            <SwiperSlide>
              <AdvantageCard
                key={index}
                title={data.title}
                chips={data.chips}
                img={data.image}
                points={data.points}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}