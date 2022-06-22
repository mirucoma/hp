import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { Link } from "gatsby"

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

    a: {
      color: "#797979",
    },

    "a:hover": {
      textDecoration: "none",
    },

    [mq[0]]: {
      flexDirection: "column",
      textAlign: "center",
      gap: "0px",
      p: { borderBottom: "1px solid rgba(0, 0, 0, 0.12);", padding: "16px" },
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
          <Link to="/user-policy">
            <p>利用規約</p>
          </Link>
          <Link to="/privacy-policy">
            <p>プライバシーポリシー</p>
          </Link>
          <Link to="/terms-of-sale">
            <p>特定商取引法に基づく表記</p>
          </Link>
          <Link to="/company">
            <p>運営会社</p>
          </Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTRSPZJ9PS5lAXBJTui5n_25DscUlz09jy333w1GcrFkLWvg/viewform">
            <p>お問い合わせ</p>
          </a>
        </div>
        <p css={bottomText}>
          ©2022 Lagoon Corporation, inc. Icon made by Font Awesome is licensed
          by CC 4.0BY
        </p>
      </div>
    </>
  )
}
