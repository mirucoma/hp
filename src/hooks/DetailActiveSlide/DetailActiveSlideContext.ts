import { createContext } from "react"
import React from "react"

const DetailActiveSlideContext = createContext({
  activeDetailSlide: 0,
  setActiveDetailSlide: (value: number) => {}
})
export default DetailActiveSlideContext