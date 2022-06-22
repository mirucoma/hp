import Helmet from "react-helmet"
import React, { ReactNode } from "react"
import { withPrefix } from "gatsby"
import { Global, css } from "@emotion/react"

type headProps = {
  title: string
  description: string
  children: ReactNode
}


export default (props: headProps ) => {
  const { title, description,children } = props
  const global = css({
    html: {
      fontSize: "50%",
    },
    "*": {
      margin: "0",
      padding: "0",
    },
  })
  return (
    <>
      <Global styles={global} />
      <Helmet
        htmlAttributes={{
          lang: "ja",
        }}
        link={[{ rel: "icon", href: withPrefix("/favicon.ico") }]}
        title={title}
        meta={[
          {
            name: "description",
            content: description,
          },
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
        ]}
      />
      {children}
    </>
  )
}
