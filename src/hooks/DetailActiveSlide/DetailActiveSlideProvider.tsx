import DetailActiveSlideContext from "./DetailActiveSlideContext"
import { ReactNode, useState } from "react"

type Props = {
  children: ReactNode
}
const DetailActiveSlideProvider = (props: Props) => {
  const { children } = props
  const [activeDetailSlide, setActiveDetailSlide] = useState(0)
  return (
    <DetailActiveSlideContext.Provider
      value={{ activeDetailSlide:  activeDetailSlide,setActiveDetailSlide: setActiveDetailSlide}}
    >
      {children}
    </DetailActiveSlideContext.Provider>
  )
}
export default DetailActiveSlideProvider
