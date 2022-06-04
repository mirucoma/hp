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

type QandA = {
  question: string
  answer: string, 
  detailLink: string | null
}

type planButtonDataType = Array<{
  title: string
  image: JSX.Element
  priceText: string
  chips: string[]
}>
