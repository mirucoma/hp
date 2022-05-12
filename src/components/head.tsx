import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

type headProps = {
  title: string
  description: string
}

export default (props: headProps) => {
  const { title, description } = props
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      link={[
        { rel: "icon", href: withPrefix("/favicon.ico") },
      ]}
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
  )
}
