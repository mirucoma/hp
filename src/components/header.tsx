import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const barWrap = css({
    display: "flex",
    backgroundColor: color.primary,
  })

  const content = css({
    display: "flex",
    gap: "40px",
    width: "100%",
    justifyContent: "end",
  })

  const logoImage = css({
    width: "120px",
    objectFit: "contain",
    [mq[0]]: {width: "50%"}
  })

  const subtitled = css({
    color: "white",
    padding: "24px 0",
    fontSize: "2rem",
    [mq[0]]: {display: "none"}
  })

  const loginButton = css({
    backgroundColor: "#EE9D2B",
    borderRadius: "32px",
    padding: "16px",
    marginTop: "7px",
    marginRight: "16px",
    color: "white",
    fontSize: "2rem",

    [mq[0]]: {padding: "8px"}
  })

  return (
    <>
      <header>
        <div css={barWrap}>
          <StaticImage css={logoImage} src="../../static/images/logo.png" alt="" />
          <div css={content}>
            <p css={subtitled}>プラン紹介</p>
            <p css={subtitled}>利用料金</p>
            <p css={subtitled}>お問合せ</p>
            <p css={subtitled}>お知らせ</p>
            <div>
              <div css={loginButton}>
                <p>　　ログイン</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
