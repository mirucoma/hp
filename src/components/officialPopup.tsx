import React, { useState } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import mq from "../styles/mediaQuery"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default () => {
  const [open, setOpen] = useState<boolean>(true)
  const toggleOpen = () => {
    console.log("toggle")
    setOpen(prevState => !prevState)
  }
  const Wrapper = css({
    backgroundColor: "white",
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "8px",
    width: "fit-content",
    // marginLeft: "auto",

    position: "sticky",
    bottom: 30,
  })

  const popupButton = css({
    width: "19.4px",
    height: "19.4px",
    transform: open ? "rotate(0)" : "rotate(180deg)",
    cursor: "pointer",
  })

  const content = css({
    marginTop: "8px",
    gap: "24px",
    display: open ? "flex" : "none",
  })

  const officialPipText = css({
    fontSize: "1.3rem",
    color: color.primary.main,
    border: `2px solid ${color.primary.main}`,
    fontWeight: "bold",
    textAlign: "center",
  })
  return (
    <>
      <div css={Wrapper}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div css={{ display: "flex", gap: "5px" }}>
            <StaticImage
              src="../../static/images/mirucoma.png"
              alt="official logo"
              css={{ width: "24px", height: "15.4px", marginTop: "4px" }}
            />
            <p
              css={{
                color: color.primary.main,
                fontSize: "1.7rem",
                fontWeight: "bold",
              }}
            >
              OFFICIAL
            </p>
          </div>
          <div onClick={() => toggleOpen()}>
            <StaticImage
              css={popupButton}
              src="../../static/images/popupButton.png"
              alt="popupButton"
            />
          </div>
        </div>
        <div css={content}>
          <div css={{ display: "flex", gap: "20px" }}>
            <Link to="https://www.facebook.com/profile.php?id=100081012923866">
              <StaticImage
                css={{ width: "40px", height: "40px" }}
                src="../../static/images/facebookLogo.png"
                alt="facebookLogo"
              />
            </Link>
            <Link to="https://www.instagram.com/mirucoma_/">
              <StaticImage
                css={{ width: "40px", height: "40px" }}
                src="../../static/images/instagram.png"
                alt="instagram logo"
              />
            </Link>
          </div>
          <div>
            <p css={officialPipText}>お電話でもお問い合わせいただけます</p>
            <div
              css={{
                display: "flex",
                alignItems: "center",
                marginTop: "4px",
                gap: "8px",
              }}
            >
              <StaticImage
                css={{ width: "20px", height: "20px" }}
                src="../../static/images/callMark.png"
                alt="callMark"
              />
              <p css={{ color: color.primary.main, fontSize: "1.8rem" }}>
                050-3637-6470
                <span css={{ fontSize: "1.3rem" }}> (平日 : 9:00 - 18:00)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
