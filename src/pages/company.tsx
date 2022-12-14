import React from "react"
import Head from "../components/head"
import Header from "../components/header"
import { css } from "@emotion/react"
import Footer from "../components/footer"
import mq from "../styles/mediaQuery"

export default function Home() {
  const wrapper = css({
    width: "80%",
    margin: "0 auto",
    padding: "64px 0",
    maxWidth: "960px",

    a: {
      color: "#797979",
      textDecoration: "none",
    },
  })

  const title = css({
    fontSize: "3rem",
    border: "none",
  })

  const ulWrapper = css({
    fontSize: "2rem",
    margin: 0,
    marginTop: "32px",
    li: {
      display: "flex",
      borderBottom: "1px solid #bdbdbd",

      [mq[1]]: { flexFlow: "column" },
    },
    p: {
      margin: "18px 0",
    },
  })

  const leftTitle = css({
    width: "35%",
    display: "inline-block",
  })

  const rightContent = css({
    display: "inline-block",
    [mq[1]]: { paddingLeft: "8px" }
  })
  return (
    <>
      <Head
        title="運営会社 - ミルコマ"
        description="見るだけのコマ管理ツール"
      >
        <Header />
        <div css={wrapper}>
          <h2 css={title}>運営会社</h2>
          <ul css={ulWrapper}>
            <li>
              <p css={leftTitle}>社名</p>
              <p css={rightContent}>株式会社ラグーンコーポレーション</p>
            </li>
            <li>
              <p css={leftTitle}>本社所在地</p>
              <p css={rightContent}>京都府京都市南区吉祥院中河原里西町４番地</p>
            </li>
            <li>
              <p css={leftTitle}>代表者</p>
              <p css={rightContent}>千原正博</p>
            </li>
            <li>
              <p css={leftTitle}>電話番号</p>
              <p css={rightContent}> 050-3637-6470</p>
            </li>
            <li>
              <p css={leftTitle}>設立</p>
              <p css={rightContent}>平成16年5月7日</p>
            </li>
            <li>
              <p css={leftTitle}>資本金</p>
              <p css={rightContent}>1000万円</p>
            </li>
            <li>
              <p css={leftTitle}>事業内容</p>
              <p css={rightContent}>
                不動産の売買、賃貸、管理及び仲介 生命保険の募集に関する業務 <br />
                損害保険代理業 労働者派遣事業<br />
                情報サービス業及びインターネット付随サービス業<br />
                IT関連機器の製造、販売、設置保守<br />
                上記各号に付帯関連する一切の事業<br />
              </p>
            </li>
          </ul>
        </div>
      </Head>
      <Footer />
    </>
  )
}
