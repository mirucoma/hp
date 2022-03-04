import { css } from "@emotion/react"

export default function Home() {
  const textColor = css({
    color: "red",
  })

  return <div css={textColor}>Hello world!</div>
}
