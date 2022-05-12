type benefitDataType = Array<{
  title: string
  chips: string[]
  image: JSX.Element
  points: string[]
}>

type slideDataType = {
  [key: number]: Array<{
    image: JSX.Element
    title: string
    detail: string
  }>
}

type planButtonDataType = Array<{
  title: string
  image: JSX.Element
  priceText: string
  chips: string[]
}>
