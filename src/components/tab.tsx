import React, { useState } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
// import { MODE } from "./announcements"

export type tabProps = {
  title: string
  active: boolean
  onClick: () => void
}
export default (props: tabProps) => {
  const { title, active, onClick } = props
  const tabWrapper = css({
    width: "30%",
    padding: "16px",
    borderBottom: "2px solid",
    borderColor: active ? color.primary.main : "gray",
    [mq[0]]: {width: "44%"}
  })

  const tabText = css({
    fontSize: "3rem",
    color: active ? color.primary.main : "black",
    [mq[0]]: { fontSize: "1.8rem"}
  })
  return (
    <div css={tabWrapper} onClick={onClick}>
      <p css={tabText}>{title}</p>
    </div>
  )
}
