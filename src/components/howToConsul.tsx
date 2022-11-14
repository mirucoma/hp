import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import ReservationForm from "./reservationForm"

export default () => {
  const Wrapper = css({
    backgroundColor: color.primary.light,
    marginTop: "40px",
    padding: "48px",

    [mq[0]]: {
      padding: "0",
    },
  })

  const topContent = css({
    width: "96%",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "16px",
    textAlign: "center",

    [mq[0]]: { width: "100%" },
  })

  const title = css({
    color: color.primary.main,
    fontSize: "4rem",
    paddingTop: "32px",

    [mq[0]]: { fontSize: "2.5rem" },
  })

  const pointsField = css({
    display: "flex",
    marginTop: "32px",
    gap: "24px",
    width: "100%",
    justifyContent: "center",

    [mq[0]]: {
      flexDirection: "column",
    },
  })

  const point = css({
    fontSize: "2rem",
    padding: "16px 70px",
    backgroundColor: "#FAFAFA",
    borderRadius: "8px",

    [mq[0]]: {
      width: "72%",
      margin: "0 auto",
    },
  })

  const infoButton = css({
    fontSize: "2.5rem",
    color: color.primary.main,
    padding: "20px 80px",

    border: "1px solid #009688",
    borderRadius: "8px",

    width: "fit-content",
    margin: "0 auto",
    marginTop: "32px",
    marginBottom: "32px",

    [mq[0]]: { fontSize: "1.75rem", padding: "10px 20px" },
  })

  const secondContent = css({
    backgroundColor: "white",
    padding: "24px",
    width: "96%",
    margin: "0 auto",
    borderRadius: "16px",

    marginTop: "32px",

    [mq[0]]: {
      padding: "0",
    },
  })

  const subTitle = css({
    fontSize: "3rem",
    color: color.primary.main,
    // marginBottom: "32px",

    [mq[0]]: {
      textAlign: "center",
    },
  })

  const arrowBackground = css({
    // clipPath: "polygon(72% 0, 100% 51%, 78% 100%, 0 100%, 26% 51%, 0 0)",
    marginTop: "32px",
    clipPath: "polygon(89% 0, 100% 51%, 90% 100%, 0 100%, 7% 50%, 0 0)",
    backgroundColor: "#E0F2F1",
    //width: "fit-content",
    padding: "11px 40px",
  })

  const flowDisplay = css({
    display: "flex",
    justifyContent: "center",
    padding: "0 56px",

    [mq[3]]: { padding: "0 16px", gap: "48px" },
    [mq[0]]: { flexDirection: "column", padding: "0", gap: "32px" },

    gap: "64px",
  })

  const arrowWrapper = css({
    width: "33%",
    [mq[0]]: {
      width: "100%",
    },
  })

  const startButton = css({
    fontSize: "2rem",
    padding: "20px 200px",
    border: "0px",
    borderRadius: "40px",
    backgroundColor: "#EE9D2B",
    color: "white",
    marginTop: "48px",

    cursor: "pointer",

    [mq[0]]: {
      padding: "11px 72px",
    },
  })
  return (
    <>
      <div css={Wrapper}>
        <div css={topContent}>
          <p css={title}>無料オンライン相談実施中</p>
          <p css={{ fontSize: "2rem", [mq[0]]: { fontSize: "1.75rem" } }}>
            導入を決めていなくても、お気軽にご相談ください。
          </p>

          <div css={pointsField}>
            <p css={point}>機能について</p>
            <p css={point}>料金について</p>
            <p css={point}>使い方について</p>
          </div>
          <p css={infoButton}>↓ 相談予約の流れを確認</p>
          <br />
        </div>

        <div css={secondContent}>
          <p css={subTitle}>オンライン相談の流れ</p>

          <div css={flowDisplay}>
            <div css={arrowWrapper}>
              <div css={arrowBackground}>
                <p css={subTitle}>1.ご予約フォーム</p>
              </div>
              <p css={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.54)" }}>
                下記フォームに希望日時をお知らせください。後日、メールにてご連絡します。
              </p>
            </div>

            <div css={arrowWrapper}>
              <div css={arrowBackground}>
                <p css={subTitle}>2. 相談日時を決定</p>
              </div>
              <p css={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.54)" }}>
                ご相談の日時やオンライン相談の方法などをメールでご連絡します。
              </p>
            </div>

            <div css={arrowWrapper}>
              <div css={arrowBackground}>
                <p css={subTitle}>3. ご相談実施</p>
              </div>
              <p css={{ fontSize: "2rem", color: "rgba(0, 0, 0, 0.54)" }}>
                相談日時当日に、 再度メールにてご案内します。
              </p>
            </div>
          </div>
          <div css={{ width: "fit-content", margin: "0 auto" }}>
            <ReservationForm />
          </div>
        </div>
      </div>
    </>
  )
}
