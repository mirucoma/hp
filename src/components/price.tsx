import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { ST } from "next/dist/shared/lib/utils"
import { StaticImage } from "gatsby-plugin-image"

export default () => {
  const Wrapper = css({
    fontSize: "1.7rem",
    paddingTop: "80px",
    paddingBottom: "24px",
    backgroundColor: color.primary.light,
  })

  const topicWrapper = css({
    textAlign: "center",
    marginBottom: "32px",
  })

  const topicText = css({
    fontSize: "3rem",
  })

  const boldAndUnderText = css({
    color: color.primary.main,
    textDecoration: "underline",
  })

  const shadowBox = css({
    width: "56%",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    padding: "16px 24px",
  })

  const centerFlex = css({
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "24px",
  })

  const gapFlex = css({
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "24px",
    paddingTop: "24px",
  })

  const detailPopText = css({
    fontSize: "3rem",
  })

  const boldText = css({
    fontSize: "4rem",
    color: color.primary.main,
  })

  const shiftText = css({
    position: "relative",
    left: "140px",
  })

  const chipText = css({
    fontSize: "1.7rem",
    color: "gray",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "8px",
    display: "inline-block",
  })

  const warnWrap = css({
    marginTop: "24px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
  })

  const warnText = css({
    color: "gray",
  })

  const customDivider = css({
    position: "relative",
  })

  const dividerImage = css({
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    top: "-46px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "24px",
    objectFit: "cover",
  })

  const secondBodyWrapper = css({
    fontSize: "1.7rem",
    paddingTop: "80px",
    paddingBottom: "24px",
    backgroundColor: "white",
  })

  const secondBodyTitle = css({
    fontSize: "3rem",
    color: color.primary.main,
  })

  return (
    <>
      <div css={Wrapper}>
        <div css={topicWrapper}>
          <h3 css={topicText}>利用料金</h3>
        </div>
        <div css={topicWrapper}>
          <h3 css={topicText}>
            ミルコマは、<span css={boldAndUnderText}>月々1100円</span>
            から始められます。
            <br />
            <span css={{ fontSize: "2rem" }}>※最低利用限度額はありません</span>
          </h3>
        </div>
        <div css={shadowBox}>
          <div css={centerFlex}>
            <p css={detailPopText}>
              生徒が<span css={boldText}>15人以内</span>なら
              <br />
              <span css={shiftText}>すべてのプランが</span>
            </p>
            <StaticImage
              src={"../../static/images/zero-yen.png"}
              alt={"zero"}
            />
          </div>
          <hr css={{ backgroundColor: color.primary.main }} />

          <div css={{ marginTop: "24px" }}>
            <p css={{ fontSize: "2rem", paddingLeft: "40px" }}>
              ご利用いただける機能
            </p>
            <div css={gapFlex}>
              <p css={chipText}>入退室プラン</p>
              <p css={chipText}>メッセージ管理プラン</p>
              <p css={chipText}>請求書管理プラン</p>
            </div>
          </div>
        </div>
        <div css={warnWrap}>
          <p css={warnText}>
            ※1
            お支払い情報の登録を行い、プランの選択を行わない限り、支払は行われません。{" "}
            <br />
            ※2 生徒・講師・保護者はそれぞれ最大15人まで登録できます。 <br />
            ※3 退塾した生徒は含まれません。
            <br />
          </p>
        </div>

        <div css={customDivider}>
          <div css={dividerImage}>
            <StaticImage src={"../../static/images/plus.png"} alt={"plus"} />
          </div>
        </div>

        <div css={secondBodyWrapper}>
          <div css={topicWrapper}>
            <h3 css={secondBodyTitle}>組み合わせで選べるプラン</h3>
          </div>
          <div css={warnWrap}>
            <p css={warnText}>
              ※1
              お支払い情報の登録を行い、プランの選択を行わない限り、支払は行われません。{" "}
              <br />
              ※2 生徒・講師・保護者はそれぞれ最大15人まで登録できます。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
