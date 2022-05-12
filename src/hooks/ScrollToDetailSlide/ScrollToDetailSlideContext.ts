import { createContext } from "react"
import React from "react"

const ScrollToDetailSlideContext = createContext({
  targetRef: React.createRef<HTMLDivElement>(),
  scrollToDetailSlide: () => {}
})
export default ScrollToDetailSlideContext