import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const howToPayWrapper = css({
    marginTop: "72px",
    textAlign: "center",

    [mq[0]]: {marginTop: "56px"}
  })
  const topicText = css({
    fontSize: "3rem",
    [mq[0]]: { fontSize: "2rem" },
  })

  const payListWrapper = css({
    width: "64%",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "56px",

    [mq[0]]: {width: "88%"}
  })

  const payListImage = css({
    width: "100%",
    maxWidth: "100%",
    height: "auto",
  })

  const grayText = css({
    color: "gray",
    fontSize: "2.4rem", 
    paddingTop: "56px",

    [mq[0]]:{ fontSize: "1.2rem", paddingTop: "32px"},
  })
  return (
    <>
      <div css={howToPayWrapper}>
        <p css={topicText}>お支払い方法</p>
        <div css={payListWrapper}>
          <StaticImage
          css={payListImage}
            src={"../../static/images/howToPayList.png"}
            alt={"plus"}
          />
        </div>
        <p css={grayText}>6種類のクレジットカード払いに対応予定です</p>
      </div>
    </>
  )
}
