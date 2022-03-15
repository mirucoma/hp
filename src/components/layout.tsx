import "modern-css-reset"
import { ReactNode } from "react"
import Header from "../components/header"
import Head from "../components/head"
import { css } from "@emotion/react"
import React from "react"

const fontFamily = css({ fontFamily: "Noto Sans JP, sans-serif" })

export default ({ children }: { children: ReactNode }) => (
  <>
    <Head title="ミルコマ" description="見るだけのコマ管理ツール" />
    <Header />
    {children}
  </>
)
