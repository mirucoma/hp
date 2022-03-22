import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const benefitWrapper = css({
    display: "flex",
    height: "680px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary,

    overflow: "hidden",
  })

  const popWrapper = css({
    marginLeft: "16px",
    [mq[0]]: { textAlign: "center" },
  })

  const popText = css({
    fontSize: "64px",
    color: "white",
  })

  const subText = css({
    color: "white",
    fontSize: "2rem",
  })

  const startButton = css({
    fontSize: "24px",
    padding: "24px 56px",
    border: "0px",
    borderRadius: "40px",
    backgroundColor: color.secondary,
    color: "white",
    marginTop: "56px",
  })

  const vector = css({
    width: "56%",
    height: "600px",
    borderRadius: "63% 37% 63% 37% / 48% 51% 49% 52% ",
    backgroundColor: "white",

    position: "relative",
    left: "16%",
    display: "block",
    [mq[2]]: { display: "none" },
  })

  const inVectorImage = css({
    position: "absolute",
    top: "16%",
    left: "8%",
    opacity: "0.9",

    boxShadow: "0px 11px 15px 0px rgba(0, 0, 0, 0.2)",
  })

  return (
    <div css={benefitWrapper}>
      <div css={popWrapper}>
        <p css={popText}>
          必要な機能だけを
          <br />
          選べる時代へ
        </p>
        <p css={subText}>
          ミルコマは選べるからこそ実現できる安さと十分な機能を兼ね備えた
          <br />
          塾管理システムです。
        </p>
        <button css={startButton}>今すぐ始める</button>
      </div>
      <div css={vector}>
        <StaticImage
          css={inVectorImage}
          src="https://placehold.jp/800x400.png"
          alt=""
        />
      </div>
    </div>
  )
}
