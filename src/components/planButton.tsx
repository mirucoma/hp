import React, { useState } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

export type planButtonProps = {
  title: string
  image: string
  priceText: string
  chips: string[]
}

export default (props: planButtonProps) => {
  const { title, image, priceText, chips } = props
  const [active, setActive] = useState(false)

  const switchActive = () => {
    setActive(prevActive => !prevActive)
  }

  const planButtonWrapper = css({
    width: "27%",
    border: "6px solid",
    borderColor: active ? color.primary.select : "rgba(0, 0, 0, 0.12)",
    userSelect: "none",
    minWidth: "289px",
    margin: "0 auto",
  })

  const display = css({
    textAlign: "center",
    padding: "0 20px 20px 20px",
  })

  const planTitle = css({
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "1.9rem",
    fontWeight: "700",
    marginBottom: "16px",
  })

  const logo = css({
    width: "33px",
    height: "35px",
    margin: "0 auto",
    marginBottom: "16px",
  })

  const planButtonHr = css({
    backgroundColor: active ? color.primary.select : "rgba(0, 0, 0, 0.12)",
  })

  const gapFlex = css({
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "16px",
    paddingTop: "16px",
    flexWrap: "wrap",
  })

  const chipText = css({
    fontSize: "1.5rem",
    color: "gray",
    padding: "4px",
    border: "1px solid gray",
    borderRadius: "8px",
    display: "inline-block",
  })

  return (
    <span css={planButtonWrapper} onClick={switchActive}>
      {active ? (
        <img
          css={{ width: "16px", height: "16px", margin: "8px" }}
          src="../../static/images/select.png"
          alt=""
        />
      ) : (
        <img
          css={{ width: "16px", height: "16px", margin: "8px" }}
          src="../../static/images/disableSelect.png"
          alt=""
        />
      )}
      <div css={display}>
        <p css={planTitle}>{title}</p>
        <img css={logo} src={image} alt="" />
        <hr css={planButtonHr} />
        <p css={planTitle}>{priceText}</p>
        <div css={gapFlex}>
          {chips.map((data, index) => (
            <p key={index} css={chipText}>
              {data}
            </p>
          ))}
        </div>
      </div>
    </span>
  )
}
