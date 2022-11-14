import { Control } from "react-hook-form"

export type bookData = {
  schoolName: string, 
  mail: string,
  date: string
}

export type InputDisplayType = {
  control: Control<bookData, any>
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}