import ScrollToDetailSlideContext from "./ScrollToDetailSlideContext"
import { ReactNode, createRef, useCallback } from "react"

type Props = {
  children: ReactNode
}
const ScrollToDetailSlideProvider = (props: Props) => {
  const { children } = props
  const target = createRef<HTMLDivElement>()
  const scrollToDetailSlide = useCallback(() => {
    target!.current!.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  }, [target])
  return (
    <ScrollToDetailSlideContext.Provider
      value={{ targetRef: target, scrollToDetailSlide: scrollToDetailSlide }}
    >
      {children}
    </ScrollToDetailSlideContext.Provider>
  )
}
export default ScrollToDetailSlideProvider
