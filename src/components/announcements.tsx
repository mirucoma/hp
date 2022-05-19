import React, { useState, useEffect } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
//import Tab from "./tab"
import axios from "axios"

import useHomepageScrollStore from "../hooks/HomepageScrollStore/useHomepageScrollStore"


type announcements = {
  date: string
  title: string
  url: string
}[]

// コメントアウト部分 タブにてお知らせ種別を切り替えるコード
// 将来的に使用する可能性があるので、コメントアウトとする。
export default () => {
  //const [activeNewAnnouncements, setNewActiveAnnouncements] = useState(true)
  // const switchNewAnnouncementsActive = () => {
  //   setNewActiveAnnouncements(prevActive => !prevActive)
  // }

  const [announcements, setAnnouncements] = useState<announcements>([])

  const { announcementRef } = useHomepageScrollStore()

  const getAnnouncements = () => {
    axios({
      method: "POST",
      url: "https://bzo3et1tzb.execute-api.ap-northeast-1.amazonaws.com/default/mirucoma-notion",
      data: {
        sorts: [{ property: "日付", direction: "descending" }],
        page_size: 5,
      },
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then(res => {
        let result: announcements = []
        res.data.map((data: any) => {
          result.push({
            date: data.date,
            title: data.title,
            url: data.url,
          })
        })
        setAnnouncements(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getAnnouncements()
  }, [/*activeNewAnnouncements*/])

  const announcementsWrapper = css({
    marginTop: "72px",
    textAlign: "center",

    [mq[0]]: { marginTop: "56px" },
  })

  const topicText = css({
    fontSize: "3rem",
    [mq[0]]: { fontSize: "2rem" },
  })

  const dataWrapper = css({
    marginTop: "32px",
  })

  const tabField = css({
    display: "flex",
    justifyContent: "center",
  })

  const dataField = css({
    width: "60%",
    textAlign: "left",
    margin: "0 auto",
    padding: "8px",
    borderBottom: "1px dashed gray",
    [mq[0]]: { width: "88%" },
  })

  const dateText = css({
    fontSize: "1.9rem",
    color: color.primary.main,
  })

  const titleText = css({
    fontSize: "2rem",
  })

  return (
    <>
      <div ref={announcementRef} css={announcementsWrapper}>
        <p css={topicText}>お知らせ</p>

        <div css={dataWrapper}>
          {/* <div css={tabField}>
            <Tab
              title="新着情報"
              active={activeNewAnnouncements}
              onClick={() => switchNewAnnouncementsActive()}
            />
            <Tab
              title="メンテナンス"
              active={!activeNewAnnouncements}
              onClick={() => switchNewAnnouncementsActive()}
            />
          </div> */}
          {announcements.map((data, index) => (
            <a
              key={index}
              css={{ textDecoration: "none", color: "black" }}
              href={data.url}
            >
              <div css={dataField}>
                <p css={dateText}>{data.date}</p>
                <p css={titleText}>{data.title}</p>
              </div>
            </a>
          ))}
          <div
            css={{
              textAlign: "right",
              width: "80%",
              [mq[0]]: { width: "90%" },
            }}
          >
            <a
              css={{
                fontSize: "2rem",
                color: color.primary.main,
                borderBottom: "1px solid",
              }}
              href="https://www.notion.so/mirucoma/ffcf0bcb176d4cbfa50032f257527e85"
              target="_blank"
              rel="noopener noreferrer"
            >
              新着情報一覧はこちら
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
