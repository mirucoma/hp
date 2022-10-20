import { StaticImage } from "gatsby-plugin-image"

export type InstagramProps = {
  alt: string
}

const Instagram = ({ alt }: InstagramProps) => (
  <StaticImage
    css={{ width: "40px", height: "40px" }}
    src="../../../static/images/instagram-logo.png"
    alt={alt}
  />
)

export default Instagram
