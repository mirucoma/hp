import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import AdvantageCard from "./advantageCard"

export default () => {
  const advantageTitleWrapper = css({
    width: "100%",
    textAlign: "center",
  })

  const advantageTitle = css({
    fontSize: "3rem",
  })

  const cardWrapper = css({
    width: "25%",
  })

  return (
    <>
      <div css={advantageTitleWrapper}>
        <p css={advantageTitle}>ああああああああああああああああああああ</p>
      </div>

      <div css={cardWrapper}>
        <AdvantageCard />
      </div>
    </>
  )
}
