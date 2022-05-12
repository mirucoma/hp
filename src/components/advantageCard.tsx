import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import useDetailActiveSlide from "../hooks/DetailActiveSlide/useDetailActiveSlide"
import useScrollToDetailSlide from "../hooks/ScrollToDetailSlide/useScrollToDetailSlide"

export type advantageCardProps = {
  planId: number
  title: string
  chips: string[]
  Img: JSX.Element
  points: string[]
}

export default (props: advantageCardProps) => {
  const { planId, title, chips, Img, points } = props
  const { setActiveDetailSlide } = useDetailActiveSlide()

  const { scrollToDetailSlide } = useScrollToDetailSlide()

  const jumpToDetailSlide = () => {
    setActiveDetailSlide(planId)
    scrollToDetailSlide()
  }

  const cardWrapper = css({
    backgroundColor: "white",
    boxShadow:
      "0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "380px",
    borderRadius: "8px",
  })

  const cardTitle = css({
    fontSize: "2.5rem",
    fontWeight: "700",
    color: color.primary.main,
    padding: "20px 0",
  })

  const chipWrapper = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  })

  const chipText = css({
    fontSize: "1.7rem",
    color: "gray",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "24px",
    display: "inline-block",
  })

  const cardImage = css({
    display: "inline-block",
    textAlign: "center",
  })

  const pointList = css({
    padding: "16px",
    paddingTop: "24px",
    textAlign: "left",
    li: {
      fontSize: "2rem",
    },
  })

  const detailWrapper = css({
    textAlign: "right",
  })

  const detailLink = css({
    fontSize: "1.4rem",
    color: color.primary.main,
    padding: "10px",
    border: "1px solid",
    display: "inline-block",
    marginBottom: "16px",
    marginRight: "16px",
  })

  return (
    <div css={cardWrapper}>
      <h4 css={cardTitle}>{title}</h4>

      <div css={chipWrapper}>
        {chips.map((text, index) => (
          <p css={chipText} key={index}>
            {text}
          </p>
        ))}
      </div>

      {Img}

      <ul css={pointList}>
        {points.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>

      <div css={detailWrapper}>
        <p css={detailLink} onClick={() => jumpToDetailSlide()}>
          詳細 →
        </p>
      </div>
    </div>
  )
}
