
import React, { useState } from "react"
import { css } from "@emotion/react"
import color from "../../styles/color"
import mq from "../../styles/mediaQuery"
import { Button } from "@mantine/core"
import RHFTextInput from "../Input/RHFTextInput"

import { useForm } from "react-hook-form";
import resolver from './resolver'
import axios from "axios"
import { InputDisplayType } from "./type"


export default ({ control, onSubmit }: InputDisplayType) => {

  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    setLoading(true)
    onSubmit().then(() => {
      setLoading(false)
    })
  }
  const contentWrapper = css({
    display: "flex",
    gap: "48px",
    [mq[1]]: {gap: "16px"},
    [mq[0]]: {flexDirection: "column"}
  })

  const label = css({
    fontSize: "2.1rem",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    [mq[1]]: {fontSize: "1.5rem"}
  })

  const inputWrapper = css({
    display: "flex",
    gap: "24px",
    borderBottom: "1px solid #cccccc",
    alignItems: "center",
    [mq[1]]: {gap: "16px"},
    [mq[0]]: {width: "90vw"}
  })

  return (
    <>
      <div>

        <div css={contentWrapper}>
          <div css={inputWrapper}>
            <p css={label}>塾名</p>
            <RHFTextInput
              control={control}
              name="schoolName"
              placeholder="ミルコマ塾"
              variant="unstyled"
            />
          </div>
          <div css={inputWrapper}>
            <p css={label}>メールアドレス</p>
            <RHFTextInput
              control={control}
              name="mail"
              placeholder="xxx@xxx.xxx"
              variant="unstyled"
              type="email"
            />
          </div>
        </div>

        <div css={inputWrapper} style={{ marginTop: "32px" }}>
          <p css={label}>ご希望日時</p>
          <RHFTextInput
            control={control}
            name="date"
            placeholder="xx曜: 午前 or 午後 || xx曜日: nn:nn"
            variant="unstyled"
            css={{ width: "80%" }}
          />
        </div>

        <div css={{ textAlign: "center", width: "100%" }}>
          <Button color="teal" sx={{ marginTop: "24px", padding: "0 32px" }} onClick={handleSubmit} loading={loading}>
            送信
          </Button>
        </div>
      </div>
    </>
  )

}