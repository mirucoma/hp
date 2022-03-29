import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const customerVoiceWrapper = css({
    textAlign: "center",
    marginTop: "48px",
  })

  const customerVoicePop = css({
    fontSize: "4rem",
    [mq[0]]: { fontSize: "2.3rem" },
  })

  const cardWrapper = css({
    boxShadow:
      "0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    width: "40%",
    borderRadius: "8px",
  })

  const cardTopFlex = css({
    display: "flex",
    gap: "16px",
    textAlign: "left",
  })

  const cardTitle = css({
    fontSize: "2.3rem",
  })

  const cardDescription = css({
    fontSize: "1.8rem",
    color: "gray",
  })

  const cardMessageWrapper = css({
    backgroundColor: "#f5f0e7",
    width: "88%",
    padding: "0 20px"
  })

  const cardMessage = css({
    fontSize: "2.2rem",
    color: "rgba(0, 0, 0, 0.54)",
    borderBottom: "solid",
  })

  return (
    <>
      <div css={customerVoiceWrapper}>
        <h3 css={customerVoicePop}>お客様から好評の声 続々</h3>

        <div css={cardWrapper}>
          <div css={cardTopFlex}>
            <StaticImage src="https://placehold.jp/205x261.png" alt="" />
            <div>
              <p css={cardTitle}>お客様の声その１</p>
              <StaticImage src="https://placehold.jp/311x72.png" alt="" />
              <p css={cardDescription}>大阪府: 38歳男性</p>
            </div>
          </div>
          <div css={cardMessageWrapper}>
            <p css={cardMessage}>あああああああああああああああ</p>
            <p css={cardMessage}>あああああああああああああああ</p>
            <p css={cardMessage}>あああああああああああああああ</p>
          </div>
        </div>
      </div>
    </>
  )
}
