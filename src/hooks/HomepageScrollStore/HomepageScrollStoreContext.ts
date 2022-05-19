import { createContext } from "react"
import React from "react"

const HomepageScrollStoreContext = createContext({
  advantageRef: React.createRef<HTMLDivElement>(),
  detailRef: React.createRef<HTMLDivElement>(),
  priceRef: React.createRef<HTMLDivElement>(),
  qandARef: React.createRef<HTMLDivElement>(),
  announcementRef: React.createRef<HTMLDivElement>(),
  scrollToRef: (target: React.RefObject<HTMLDivElement>) => {}
})
export default HomepageScrollStoreContext