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
        title="特定商取引法に基づく表記 - ミルコマ"
        description="見るだけのコマ管理ツール"
      >
        <Header />
        <div css={wrapper}>
          <h2 css={title}>特定商取引法に基づく表記</h2>
          <ul css={ulWrapper}>
            <li>
              <p css={leftTitle}>販売事業者名</p>
              <p css={rightContent}>株式会社ラグーンコーポレーション</p>
            </li>
            <li>
              <p css={leftTitle}>運営責任者</p>
              <p css={rightContent}>千原智弘</p>
            </li>
            <li>
              <p css={leftTitle}>住所</p>
              <p css={rightContent}>京都府京都市南区吉祥院中河原里西町4番地</p>
            </li>
            <li>
              <p css={leftTitle}>電話番号</p>
              <p css={rightContent}> 075-312-0404</p>
            </li>
            <li>
              <p css={leftTitle}>販売事業者名</p>
              <p css={rightContent}>株式会社ラグーンコーポレーション</p>
            </li>
            <li>
              <p css={leftTitle}>メールアドレス</p>
              <p css={rightContent}>
                お問い合わせは
                <a
                  href={
                    "https://docs.google.com/forms/d/e/1FAIpQLSdTRSPZJ9PS5lAXBJTui5n_25DscUlz09jy333w1GcrFkLWvg/viewform"
                  }
                >
                  こちらから
                </a>
              </p>
            </li>
            <li>
              <p css={leftTitle}>販売価格</p>
              <p css={rightContent}>
                <a href={"/"}>利用料金</a> に記載
              </p>
            </li>
            <li>
              <p css={leftTitle}>支払いの方法</p>
              <p css={rightContent}>クレジットカード決済のみ</p>
            </li>
            <li>
              <p css={leftTitle}>解約または退会の条件</p>
              <p css={rightContent}>
                契約期間内であればいつでも解約することが可能です。
                <br />
                <br />
                解約後、次回更新タイミング以降の請求は行われません。
              </p>
            </li>
          </ul>
        </div>
      </Head>
      <Footer />
    </>
  )
}
