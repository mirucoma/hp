import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

export default () => {
  const conceptWrapper = css({
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "48px",

    [mq[1]]: { flexFlow: "column" },
  })

  const conceptText = css({
    fontSize: "4rem",
    color: color.primary,
    fontWeight: "700",
    borderLeft: "4px solid",
    padding: "0 16px",
  })

  const detail = css({
    width: "40%",
    fontSize: "2rem",
    fontWeight: "400",
    lineHeight: "28px",
    letterSpacing: "2px",

    [mq[1]]: { width: "100%", padding: "16px" },
  })
  return (
    <div css={conceptWrapper}>
      <p css={conceptText}>concept</p>
      <p css={detail}>
        とある塾の教室長の方が目の下にクマを作りながら生徒や保護者さんに対応されており、とても元気がない様子でした。そこで私達はボトルネックになっていた塾の雑務を自動化することで、教室長さんの負担を軽減できると考えました。
        ミルコマは塾を運営する方々がよりよい環境作りや生徒と向き合う時間を何よりも大切に考えています。
      </p>
    </div>
  )
}
