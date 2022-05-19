import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default () => {
  const barWrap = css({
    display: "flex",
    backgroundColor: color.primary.main,
  })

  const content = css({
    display: "flex",
    gap: "40px",
    width: "100%",
    justifyContent: "end",

    [mq[0]]: { display: "none" },
  })

  const logoImage = css({
    width: "160px",
    height: "auto",
    objectFit: "contain",
    margin: "16px 32px",
   [mq[0]]: { margin: "12px 16px" },
  })

  const subtitled = css({
    color: "white",
    padding: "24px 0",
    fontSize: "2rem",
  })

  const loginButton = css({
    backgroundColor: "#EE9D2B",
    borderRadius: "32px",
    padding: "16px",
    marginTop: "7px",
    marginRight: "16px",
    color: "white",
    fontSize: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    [mq[0]]: { padding: "8px" },
  })

  return (
    <>
      <header>
        <div css={barWrap}>
          <div css={logoImage}>
          <StaticImage
            src="../../static/images/logo.png"
            alt=""
          />
          </div>
          <div css={content}>
            <p css={subtitled}>プラン紹介</p>
            <p css={subtitled}>利用料金</p>
            <p css={subtitled}>お問合せ</p>
            <p css={subtitled}>お知らせ</p>
            <div>
              <div css={loginButton}>
                <StaticImage css={{width: "20px", height: "18px"}} src={"../../static/images/join-logo.png"} alt={""} />
                <p>ログイン</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
