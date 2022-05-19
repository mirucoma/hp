import HomepageScrollStoreContext from "./HomepageScrollStoreContext"
import { ReactNode, createRef, useCallback } from "react"

type Props = {
  children: ReactNode
}
const HomepageScrollStoreProvider = (props: Props) => {
  const { children } = props
  const scrollToRef = useCallback((target: React.RefObject<HTMLDivElement>) => {
    target!.current!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }, [])
  return (
    <HomepageScrollStoreContext.Provider
      value={{
        advantageRef: createRef<HTMLDivElement>(),
        detailRef: createRef<HTMLDivElement>(),
        priceRef: createRef<HTMLDivElement>(),
        qandARef: createRef<HTMLDivElement>(),
        announcementRef: createRef<HTMLDivElement>(),
        scrollToRef: scrollToRef,
      }}
    >
      {children}
    </HomepageScrollStoreContext.Provider>
  )
}
export default HomepageScrollStoreProvider
