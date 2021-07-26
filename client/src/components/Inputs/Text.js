import React from 'react'
import Input from '@material-tailwind/react/Input'

export default function InputText({
  error = '',
  success = '',
  placeholder = 'label',
  color = 'lightBlue',
  ...rest
}) {
  return (
    <Input
      type="text"
      color={color}
      size="sm"
      outline={false}
      placeholder={placeholder}
      success={success}
      error={error}
      {...rest}
    />
  )
}
