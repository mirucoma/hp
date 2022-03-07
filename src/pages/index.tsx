import React from "react"
import { css } from "@emotion/react"
import Head from "../components/head"

export default function Home() {
  const textColor = css({
    color: "red",
  })

  return (
    <>
      <Head title="ミルコマ" description="見るだけのコマ管理ツール" />
      <div css={textColor}>Hello world!</div>
    </>
  )
}
