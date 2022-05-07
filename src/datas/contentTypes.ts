type benefitDataType = Array<{
  title: string
  chips: string[]
  image: string
  points: string[]
}>

type slideDataType = {
  [key: number]: Array<{
    image: string
    title: string
    detail: string
  }>
}

type planButtonDataType = Array<{
  title: string
  image: string
  priceText: string
  chips: string[]
}>
