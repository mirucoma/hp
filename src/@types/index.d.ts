import { ReactNode } from "react"

declare module '*.png'
declare module '*.jpg'
declare module '*.gif'

export type ChildrenProps = {
  children: ReactNode
}