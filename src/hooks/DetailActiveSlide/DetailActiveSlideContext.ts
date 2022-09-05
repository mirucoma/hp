import { createContext } from "react"

const DetailActiveSlideContext = createContext({
  activeDetailSlide: 0,
  setActiveDetailSlide: (value: number) => {}
})
export default DetailActiveSlideContext