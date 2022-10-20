import { StaticImage } from "gatsby-plugin-image"

export type FacebookProps = {
  alt: string
}

const Facebook = ({ alt }: FacebookProps) => (
  <StaticImage
    css={{ width: "40px", height: "40px" }}
    src="../../../static/images/facebook-logo.png"
    alt={alt}
  />
)

export default Facebook
