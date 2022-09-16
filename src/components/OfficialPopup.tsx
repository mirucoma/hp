import { useState } from "react"
import { css } from "@emotion/react"
import color from "../styles/color"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Facebook, Instagram } from "./image-logos"
import mq from "../styles/mediaQuery"

const wrapperStyle = css({
  backgroundColor: "white",
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "8px",
  width: "fit-content",

  position: "sticky",
  bottom: 30,
  // カードっぽいシャドウをつける
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
})

const officialPipTextStyle = css({
  fontSize: "1.3rem",
  color: color.primary.main,
  border: `2px solid ${color.primary.main}`,
  fontWeight: "bold",
  textAlign: "center",
})

const rootStyle = css({
  position: "fixed",
  right: 30,
  zIndex: 99,
  bottom: 30,
  [mq[0]]: {
    padding: "8px",
    right: 10,
    bottom: 20,
  },
})


const OfficialPopup = () => {
  const [open, setOpen] = useState(true)
  const toggleOpen = () => setOpen(prevState => !prevState)

  const popupButtonStyle = css({
    width: "19.4px",
    height: "19.4px",
    transform: open ? "rotate(0)" : "rotate(180deg)",
    cursor: "pointer",
  })

  const contentStyle = css({
    marginTop: "8px",
    gap: "24px",
    display: open ? "flex" : "none",
  })

  return (
    <div css={rootStyle}>
      <div css={wrapperStyle}>
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
          <div role='button' onClick={() => toggleOpen()}>
            <StaticImage
              css={popupButtonStyle}
              src="../../static/images/popupButton.png"
              alt="popupButton"
            />
          </div>
        </div>
        <div css={contentStyle}>
          <div css={{ display: "flex", gap: "20px" }}>
            <Link to="https://www.facebook.com/profile.php?id=100081012923866">
              <Facebook alt="Facebookへのリンク" />
            </Link>
            <Link to="https://www.instagram.com/mirucoma_/">
              <Instagram alt="Instagramへのリンク" />
            </Link>
          </div>
          <div>
            <p css={officialPipTextStyle}>お電話でもお問い合わせいただけます</p>
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
                <a href="tel:05036376470" css={{ color: "inherit" }}>
                  {" "}
                  050-3637-6470
                </a>
                <span css={{ fontSize: "1.3rem" }}> (平日 : 9:00 - 18:00)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfficialPopup
