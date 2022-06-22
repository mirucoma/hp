import React from "react"
import { css,Global } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"
import { navigate } from "gatsby"

import useHomepageScrollStore from "../hooks/HomepageScrollStore/useHomepageScrollStore"

export default () => {
  const { advantageRef, priceRef, qandARef, announcementRef, scrollToRef } =
    useHomepageScrollStore()
  const refList = [advantageRef, priceRef, qandARef, announcementRef]

  const jumpToNavigation = (index: number) => {
    if(refList[index].current != null) scrollToRef(refList[index])
    else navigate('/')
  }
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
    cursor: "pointer",
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
            <StaticImage src="../../static/images/logo.png" alt=""  loading={"eager"} />
          </div>
          <div css={content}>
            <p onClick={() => jumpToNavigation(0)} css={subtitled}>
              プラン紹介
            </p>
            <p onClick={() => jumpToNavigation(1)} css={subtitled}>
              利用料金
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdTRSPZJ9PS5lAXBJTui5n_25DscUlz09jy333w1GcrFkLWvg/viewform">
              <p css={subtitled}>
                お問い合わせ
              </p>
            </a>
            <p onClick={() => jumpToNavigation(3)} css={subtitled}>
              お知らせ
            </p>
            <div>
              <a href="https://app.mirucoma.jp/login">
                <div css={loginButton}>
                  <StaticImage
                    css={{ width: "20px", height: "18px" }}
                    src={"../../static/images/join-logo.png"}
                    alt={""}
                  />
                  <p>ログイン</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
