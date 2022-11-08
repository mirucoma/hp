import React from "react"
import { css } from "@emotion/react"
import color from "../../styles/color"
import mq from "../../styles/mediaQuery"

export default () => {
  const Wrapper = css({
    textAlign: "center"
  })

  const text = css({
    fontSize: "4rem",
    [mq[0]]: { fontSize: "2.4rem"}
  })
  return (
    <>
      <div css={Wrapper}>
        <p css={text}>予約受付を完了しました！</p>
      </div>
    </>
  )
}
