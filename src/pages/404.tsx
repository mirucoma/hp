import React from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"

import Head from "../components/head"
import Header from "../components/header"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

import QandABackgroundImage from "../../static/images/qandaBg.png"

export default () => {
  const Wrapper = css({
    width: "100vw",
    height: "99vh",
    backgroundColor: "#e9fffd",

    backgroundImage: `url(${QandABackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "right 0px bottom 0px",
    backgroundSize: "30%",
  })

  const contentWrapper = css({
    margin: "0 auto",
    width: "fit-content",
  })

  const center = css({
    display: "flex",
    alignItems: "center",
  })

  const title = css({
    fontSize: "3rem",
  })

  const logo = css({
    width: "240px",
    height: "240px",
  })

  const linkText = css({
    fontSize: "3rem",
    textAlign: "center",
  })
  return (
    <>
      <Head title="404 - ミルコマ" description="見るだけのコマ管理ツール">
        <Header />
        <div css={Wrapper}>
          <div css={contentWrapper}>
            <div css={center}>
              <p css={title}>このページは存在しません。</p>
              <StaticImage
                css={logo}
                src="../../static/images/sadMirucoma.png"
                alt=""
              />
            </div>
            <Link to="/">
              <p css={linkText}>トップページ</p>
            </Link>
          </div>
        </div>
      </Head>
    </>
  )
}
