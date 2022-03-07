import Helmet from "react-helmet"

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
      title={title}
      meta={[
        {
          name: "description",
          content: description,
        },
      ]}
    />
  )
}
