import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"
import PlanButton from "./planButton"

import { planButtonData, plans } from "../datas/content"

export default () => {
  const Wrapper = css({
    fontSize: "1.7rem",
    paddingTop: "80px",
    backgroundColor: color.primary.light,
  })

  const topicWrapper = css({
    textAlign: "center",
    marginBottom: "32px",
  })

  const topicText = css({
    fontSize: "3rem",
    [mq[0]]: { fontSize: "2rem" },
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

    [mq[0]]: { width: "88%" },
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

    [mq[0]]: { gap: "8px" },
  })

  const detailPopText = css({
    fontSize: "3rem",
    width: "80%",

    [mq[0]]: { fontSize: "1.7rem" },
  })

  const boldText = css({
    fontSize: "4rem",
    color: color.primary.main,
    [mq[0]]: { fontSize: "1.9rem" },
  })

  const shiftText = css({
    paddingLeft: "176px",
    [mq[0]]: { paddingLeft: "32px" },
  })

  const slideImage = css({
    width: "100%",
    maxWidth: "100%",
    height: "auto",

    [mq[0]]: { width: "72%" },
  })

  const chipText = css({
    fontSize: "1.7rem",
    color: "gray",
    padding: "8px",
    border: "1px solid gray",
    borderRadius: "8px",
    display: "inline-block",

    [mq[0]]: { fontSize: "1rem", padding: "4px" },
  })

  const warnWrap = css({
    marginTop: "24px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",

    [mq[0]]: { padding: "0px 32px" },
  })

  const warnText = css({
    color: "gray",
    [mq[0]]: { fontSize: "1rem"}
  })

  const customDivider = css({
    position: "relative",
  })

  const dividerImageWrapper = css({
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    top: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "24px",
    objectFit: "cover",

    [mq[0]]:{padding: "13px", top: "-25px",}
  })

  const dividerImage = css({
    width: "30px",
    height: "30px",

    [mq[0]]:{width: "21px", height: "21px"}
  })

  const secondBodyWrapper = css({
    fontSize: "1.7rem",
    paddingTop: "72px",
    paddingBottom: "24px",
    backgroundColor: "white",

    [mq[0]]:{paddingTop: "40px"}
  })

  const secondBodyTitle = css({
    fontSize: "3rem",
    color: color.primary.main,

    [mq[0]]:{fontSize: "2rem"}
  })

  const planButtonWrapper = css({
    width: "80%",
    margin: "0 auto",
    overflowX: "scroll",
    "::-webkit-scrollbar": {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "8px",
      borderRadius: "8px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: color.primary.select,
      borderRadius: "8px",
    },

    [mq[0]]:{width: "96%"}
  })

  const planButtonField = css({
    width: "100%",
    display: "flex",
    gap: "48px",
    paddingTop: "24px",
    paddingBottom: "48px",
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
            <span css={{ fontSize: "1.5rem" }}>
              ※最低利用限度額はありません
            </span>
          </h3>
        </div>
        <div css={shadowBox}>
          <div css={centerFlex}>
            <p css={detailPopText}>
              生徒が<span css={boldText}>15人以内</span>なら
              <br />
              <span css={shiftText}>すべてのプランが</span>
            </p>
            <div css={{ textAlign: "right" }}>
              <StaticImage
                css={slideImage}
                src={"../../static/images/zero-yen.png"}
                alt={"zero"}
              />
            </div>
          </div>
          <hr css={{ backgroundColor: color.primary.main }} />

          <div css={{ marginTop: "24px" }}>
            <p css={{ fontSize: "2rem", paddingLeft: "40px" }}>
              ご利用いただける機能
            </p>
            <div css={gapFlex}>
              {plans.map((title, index) => (
                <p key={index} css={chipText}>
                  {title}
                </p>
              ))}
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
          <div css={dividerImageWrapper}>
            <StaticImage
              css={dividerImage}
              src={"../../static/images/plus.png"}
              alt={"plus"}
            />
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

          <div css={planButtonWrapper}>
            <div css={planButtonField}>
              {planButtonData.map((data, index) => (
                <PlanButton
                  key={index}
                  title={data.title}
                  Img={data.image}
                  priceText={data.priceText}
                  chips={data.chips}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
