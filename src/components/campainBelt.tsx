import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { useMediaQuery } from "@react-hook/media-query"

export default () => {
  const matches = useMediaQuery('only screen and (min-width: 576px)')

  const Wrapper = css({
    width: "100vw",
    display: "flex",
    padding: "24px 40px",
    gap: "24px",
    justifyContent: "center",
    [mq[3]]: { justifyContent: "center" },
    backgroundColor: "white",
    boxShadow:
      " 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
  })

  const title = css({
    fontSize: "4rem",
    fontWeight: "bold",
    color: color.primary.main,

    marginBottom: "32px",
    "@media (max-width: 1268px)": {
      fontSize: "3rem",
    },

    [mq[3]]: {
      marginBottom: "12px",
    },

    [mq[1]]: {
      fontSize: "2.5rem",
    },

    [mq[0]]: { fontSize: "2rem" },
  })

  const rangePop = css({
    fontSize: "2rem",
    margin: 0,

    [mq[0]]: { fontSize: "1.5rem" },
  })

  const redEmphasis = css({
    color: "red",
    fontSize: "2.8rem",
    paddingLeft: "24px",
    [mq[0]]: { fontSize: "1.5rem", padding: 0 },
  })

  const mobileWrapWrapper = css({
    display: "flex",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    borderRadius: "8px",
    padding: "8px 16px",
    textAlign: "left",

    alignItems: "center",

    [mq[3]]: { marginTop: "12px", flexFlow: "column", width: "100%" },
  })

  const subPopWideWrapper = css({
    display: "block",
    [mq[3]]: { display: "none" },
  })

  const subPopMobileWrapper = css({
    display: "none",
    [mq[3]]: { display: "inline-block" },
  })

  const subPop = css({
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "4rem",
    fontWeight: "bold",
    margin: 0,

    [mq[0]]: { fontSize: "2rem" },
  })

  const weakText = css({
    fontSize: "3rem",
    color: "rgba(0, 0, 0, 0.38)",
    fontWeight: "bold",
    [mq[0]]: { fontSize: "2rem" },
  })

  const strongPrimary = css({
    fontSize: "7rem",
    fontWeight: "bold",
    color: color.primary.main,

    "@media (max-width: 1308px)": {
      fontSize: "6rem",
    },

    "@media (max-width: 1268px)": {
      fontSize: "5rem",
    },

    [mq[0]]: { fontSize: "4rem" },
  })

  return (
    <>
      <div css={Wrapper}>
        <div css={{ textAlign: "center", [mq[0]]: { width: "100%" } }}>
          <p css={title}>
            <span css={{ color: "red" }}>[限定２００校舎限定] </span>
            {matches ? "リリース記念キャンペーン実施中" : "リリース記念キャンペーン"}
          </p>
          <div css={subPopMobileWrapper}>
            <div css={{ display: "flex", alignItems: "end" }}>
              <div>
                <p css={subPop}>利用料金が</p>
                <p>
                  <span css={weakText}>１ヶ月 →</span>
                </p>
              </div>
              <p>
                <span css={strongPrimary}>３ヶ月無料</span>
              </p>
            </div>
          </div>

          <div css={mobileWrapWrapper}>
            <p css={rangePop}>キャンペーン期間</p>
            <p css={{margin: 0}}>
              <span css={redEmphasis}>
                2022年8月1日 (月) 00:00 ~ 2022年9月15日 (木) 23:59
              </span>
              まで
            </p>
          </div>
        </div>
        <div css={subPopWideWrapper}>
          <p css={subPop}>利用料金が</p>
          <p>
            <span css={weakText}>１ヶ月 →</span>
            <span css={strongPrimary}>３ヶ月無料</span>
          </p>
        </div>
      </div>
    </>
  )
}
