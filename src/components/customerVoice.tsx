import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const customerVoiceWrapper = css({
    textAlign: "center",
    marginTop: "48px",
    marginBottom: "120px",
    [mq[1]]:{ marginBottom: "48px"}
  })

  const topicText = css({
    fontSize: "3rem",
    [mq[0]]: { fontSize: "2rem" },
  })

  const voiceField = css({
    marginTop: "32px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  })

  const voiceCard = css({
    width: "45%",
    [mq[1]]: { width: "88%" },
  })

  const voiceCard2 = css({
    width: "45%",
    top: 56,
    left: -8,
    position: "relative",

    [mq[1]]: { top: 0, left: 0, width: "88%", marginTop: "48px" },
  })

  return (
    <>
      <div css={customerVoiceWrapper}>
        <p css={topicText}>お客様から好評の声 続々</p>
        <div css={voiceField}>
          <StaticImage
            css={voiceCard}
            src={"../../static/images/customerVoice1.png"}
            alt={""}
            quality={100}
          />
          <StaticImage
            css={voiceCard2}
            src={"../../static/images/customerVoice2.png"}
            alt={""}
            quality={100}
          />
        </div>
      </div>
    </>
  )
}
