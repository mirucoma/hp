import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import CampainBelt from "./campainBelt"
import { StaticImage } from "gatsby-plugin-image"
import OfficialPopup from "./officialPopup"

export default () => {
  const Wrapper = css({
    backgroundColor: color.primary.main,
    overflow: "hidden",
    [mq[0]]: { height: "auto" },
    // height: "100vh",

    position: "relative",
  })
  const benefitWrapper = css({
    height: "100%",
    display: "flex",
    // [mq[0]]: { height: "228px" },
    justifyContent: "center",
    alignItems: "center",
  })

  const popWrapper = css({
    marginLeft: "16px",
    paddingBottom: "8px",
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
    top: "5%",
    left: "8%",

    [mq[4]]: {
      top: "16%",
    },

    boxShadow: "0px 11px 15px 0px rgba(0, 0, 0, 0.2)",
  })

  const inVectorDeviceImage = css({
    position: "absolute",
    bottom: "0%",
    right: "25%",

    [mq[4]]: {
      position: "absolute",
      bottom: "10%",
      right: "25%",
    },
  })

  const popUp = css({
    // marginLeft: "auto",
    // width: "fit-content",
    // marginRight: "20px",
    // marginBottom: "20px",

    position: "fixed",
    right: 30,
    zIndex: 99,
    bottom: 30,
    [mq[0]]: {
      // margin: "0 auto",
      // marginBottom: "8px",
      padding: "8px",
      right: 10,
      bottom: 20,
    },
  })

  const belt = css({
    marginTop: "120px",
    [mq[0]]:{ marginTop: "32px"}
  })

  return (
    <div css={Wrapper}>
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
      <div css={popUp}>
        <OfficialPopup />
      </div>
      <div css={belt}>
        <CampainBelt />
      </div>
    </div>
  )
}
