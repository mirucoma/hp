import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const benefitWrapper = css({
    height: "100vh",
    display: "flex",
    [mq[0]]: { height: "228px" },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.primary.main,

    overflow: "hidden",
  })

  const popWrapper = css({
    marginLeft: "16px",
  })

  const popText = css({
    fontSize: "8rem",
    fontWeight: "700",
    [mq[3]]: { fontSize: "6.6rem" },
    [mq[0]]: { fontSize: "5rem" },
    color: "white",
  })

  const subText = css({
    color: "white",
    fontSize: "1.8rem",
    marginTop: 6,
  })

  const startButton = css({
    fontSize: "24px",
    padding: "24px 56px",
    border: "0px",
    borderRadius: "40px",
    backgroundColor: color.secondary,
    color: "white",
    marginTop: "56px",

    [mq[0]]: { display: "none" },
  })

  const vector = css({
    width: "53%",
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
    // opacity: "0.9",

    boxShadow: "0px 11px 15px 0px rgba(0, 0, 0, 0.2)",
  })

  const inVectorDeviceImage = css({
    position: "absolute",
    bottom: "10%",
    right: "25%",
    // opacity: "0.9",
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
        <a href="https://app.mirucoma.jp/register">
          <button css={startButton}>今すぐ始める</button>
        </a>
      </div>
      <div css={vector}>
        <StaticImage
          css={inVectorImage}
          src="../../static/images/mainScreen.png"
          alt=""
        />
        <StaticImage
          css={inVectorDeviceImage}
          src="../../static/images/mock.png"
          width={149}
          alt=""
        />
      </div>
    </div>
  )
}
