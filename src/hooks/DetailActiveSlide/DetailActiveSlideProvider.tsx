import { useState } from "react"
import DetailActiveSlideContext from "./DetailActiveSlideContext"
import { ChildrenProps } from "../../@types"

const DetailActiveSlideProvider = ({ children }: ChildrenProps) => {
  const [activeDetailSlide, setActiveDetailSlide] = useState(0)
  return (
    <DetailActiveSlideContext.Provider
      value={{
        activeDetailSlide: activeDetailSlide,
        setActiveDetailSlide: setActiveDetailSlide,
      }}
    >
      {children}
    </DetailActiveSlideContext.Provider>
  )
}
export default DetailActiveSlideProvider
