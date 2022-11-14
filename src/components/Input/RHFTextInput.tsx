
import { Controller, Control } from "react-hook-form";
import { memo } from "react";
import { TextInput, TextInputProps } from "@mantine/core";

type RHFTextInputProps = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  control: Control<any, any>,
  name: string,
} & TextInputProps

export default memo(function RHFTextField(props: RHFTextInputProps) {
  const { control, name, ...textFieldProps } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextInput
          {...field}
          {...textFieldProps}
          error={fieldState.error?.message}
        />
      )}
    />
  )
})