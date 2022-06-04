import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import DownArrowImage from "../../static/images/down-arrow.png"
import UpArrowImage from "../../static/images/up-arrow.png"
import QandABackgroundImage from "../../static/images/qandaBg.png"

import { questions } from "../datas/content"

import useHomepageScrollStore from "../hooks/HomepageScrollStore/useHomepageScrollStore"

export default () => {
  const { qandARef } = useHomepageScrollStore()
  const Wrapper = css({
    fontSize: "1.7rem",
    marginTop: "80px",
    "details > summary::after": {
      content: `url(${DownArrowImage})`,
      transform: "scale(0.7)",
      [mq[0]]: {
        transform: "scale(0.5)",
        position: "absolute",
        right: "20px",
        top: "16px",
      },
    },
    "details[open] > summary::after": {
      content: `url(${UpArrowImage})`,
    },

    backgroundImage: `url(${QandABackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "right 0px bottom 0px",
    backgroundSize: "30%",
  })

  const topicWrapper = css({
    textAlign: "center",
    marginBottom: "32px",
  })

  const topicText = css({
    fontSize: "3rem",
  })

  const drawerWrapper = css({
    backgroundColor: "white",
    position: "relative",
    fontSize: "3.2rem",
    width: "60%",
    margin: "0 auto",
    padding: "32px",
    borderRadius: "16px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    marginBottom: "24px",

    [mq[0]]: { width: "100%", fontSize: "1.6rem", padding: "16px" },
  })

  const drawerTitle = css({
    color: color.primary.main,
    userSelect: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "baseline",
  })

  const textQIcon = css({
    padding: "3px 14px 7px 14px",
    border: "2px solid",
    borderColor: color.primary.main,
    borderRadius: "50%",
    marginRight: "16px",
    [mq[0]]: { fontSize: "12px", padding: "2px 7px 5px 8px" },
  })

  const textAIcon = css({
    padding: "3px 15px 7px 15px",
    border: "2px solid",
    borderColor: color.secondary,
    color: color.secondary,
    borderRadius: "50%",
    marginRight: "16px",

    [mq[0]]: { fontSize: "12px", padding: "2px 7px 5px 7.5px" },
  })

  const questionText = css({
    display: "inline-block",
    width: "78%",
  })

  const answerWrapper = css({
    marginTop: "32px",
  })

  const answerText = css({
    color: "gray",
    fontSize: "2.4rem",
    [mq[0]]: { fontSize: "1.5rem" },
  })

  const qandAButton = css({
    fontSize: "1.6rem",
    padding: "8px 16px",
    border: "0px",
    borderRadius: "4px",
    backgroundColor: color.secondary,
    color: "white",
    marginTop: "16px",

    [mq[0]]: { fontSize: "1.5rem" },
  })

  return (
    <>
      <div ref={qandARef} css={Wrapper}>
        <div css={topicWrapper}>
          <h3 css={topicText}>Q&A</h3>
        </div>
        {questions.map((data: QandA, index: number) => (
          <details key={index} css={drawerWrapper}>
            <summary css={drawerTitle}>
              <span css={textQIcon}>Q</span>
              <span css={questionText}>{data.question}</span>
            </summary>
            <div css={answerWrapper}>
              <span css={textAIcon}>A</span>
              <span css={answerText}>{data.answer}</span>
              <br />
              {data.detailLink != null ? (
                <a
                  href={data.detailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button css={qandAButton}>詳細を確認</button>
                </a>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </>
  )
}
