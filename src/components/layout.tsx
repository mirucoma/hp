import "modern-css-reset"
import { ReactNode } from "react"
import Header from "../components/header"
import { css } from "@emotion/react"

const fontFamily = css({ fontFamily: "Noto Sans JP, sans-serif" })

export default ({ children }: { children: ReactNode }) => (
  <>
    {/* <React.Fragment>の省略形 */}
    <Header />
    {children}
  </>
)
