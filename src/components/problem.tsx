import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"

export default () => {

  const problemWrapper = css({
    textAlign: "center",
    marginTop: "48px"
  })

  const problemPop = css({
    fontSize: "4rem",
    [mq[0]]: {fontSize: "2.3rem"}
  })

  const dot = css({
    textEmphasis: `circle ${color.primary.main}`
  })

  return (
    <>
      <div css={problemWrapper}>
        <h3 css={problemPop}>こんな状況を<span css={dot}>ミルコマ</span>なら変えれます</h3>
      </div>
    </>
  )
}
