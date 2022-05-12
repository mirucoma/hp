import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

export default () => {
  const footerWrapper = css({
    marginTop: "24px",
    backgroundColor: "#F5F5F5",
    fontSize: "1.7rem",
    color: "#797979",
  })

  const field = css({
    paddingTop: "24px",
    display: "flex",
    justifyContent: "center",
    gap: "48px",

    [mq[0]]: {
      flexDirection: "column",
      textAlign: "center",
      gap: "0px",
      p: { borderBottom: "1px solid rgba(0, 0, 0, 0.12);",padding: "16px" },
    },
  })

  const bottomText = css({
    padding: "24px",
    textAlign: "center",
  })
  return (
    <>
      <div css={footerWrapper}>
        <div css={field}>
          <p>利用規約</p>
          <p>プライバシーポリシー</p>
          <p>特定商取引法に基づく表記</p>
          <p>運営会社</p>
          <p>お問合せ</p>
        </div>
        <p css={bottomText}>
          ©2022 Lagoon Corporation, inc. Icon made by Font Awesome is licensed
          by CC 4.0BY
        </p>
      </div>
    </>
  )
}
