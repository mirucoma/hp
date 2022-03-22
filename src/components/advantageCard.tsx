import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const cardWrapper = css({
    boxShadow:
      "0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  })

  const cardTitle = css({
    fontSize: "2.5rem",
    fontWeight: "700",
    color: color.primary,
    padding: "20px 0",
  })

  const chipWrapper = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
  })

  const chipText = css({
    fontSize: "1.7rem",
    color: "gray",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "24px",
    display: "inline-block",
  })

  const pointList = css({
    padding: "16px",
    paddingTop: "24px",
    li: {
      fontSize: "2rem",
    },
  })

  const detailWrapper = css({
    textAlign: "right",
  })

  const detailLink = css({
    fontSize: "1.4rem",
    color: color.primary,
    padding: "10px",
    border: "1px solid",
    display: "inline-block",
    marginBottom: "16px",
    marginRight: "16px",
  })

  return (
    <div css={cardWrapper}>
      <h4 css={cardTitle}>入退室プラン</h4>

      <div css={chipWrapper}>
        <p css={chipText}>入退室機能</p>
        <p css={chipText}>スマホアプリ</p>
      </div>

      <StaticImage src="https://placehold.jp/280x140.png" alt="" />

      <ul css={pointList}>
        <li>お手元のタブレットですぐに始められる</li>
        <li>入退室で重要なプッシュ通知を送れます</li>
        <li>業界最安値でご利用できます</li>
      </ul>

      <div css={detailWrapper}>
        <p css={detailLink}>詳細 →</p>
      </div>
    </div>
  )
}
