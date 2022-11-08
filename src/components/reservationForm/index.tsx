import { useForm } from "react-hook-form";
import resolver from './resolver'
import axios from "axios"
import { bookData } from "./type"
import InputDisplay from "./inputDisplay"
import React, { useState } from "react";
import SendEndDisplay from "./sendEndDisplay";
import { css } from "@emotion/react";

export default () => {

  const Wrapper = css({
    marginTop: "40px"
  })

  const title = css({
    fontSize: "3rem",
    padding: "24px 0"
  })

  const [sendEnd, setSendEnd] = useState<boolean>(false)
  const { control, handleSubmit } = useForm<bookData>({
    defaultValues: {
      schoolName: "",
      mail: "",
      date: ""
    },
    resolver: resolver
  })
  const onSubmit = handleSubmit(async data => {
    const formData = new FormData()
    formData.append('emailAddress', data.mail)
    formData.append('entry.469789797', data.schoolName)
    formData.append('entry.1515737950', data.date)

    try {
      await axios.post("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfYGwBGeaoBnwpg9g64M7nVD5HbDvtL3abVbRlg24FHItTP3Q/formResponse",
        formData
      )
    } catch (e) {
      setSendEnd(true)
    }

  })

  return (
    <>
      <div css={Wrapper}>
        <p css={title}>オンライン相談申し込み</p>
        {
          !sendEnd ? <InputDisplay control={control} onSubmit={onSubmit} /> : <SendEndDisplay />
        }
      </div>
    </>
  )
}
