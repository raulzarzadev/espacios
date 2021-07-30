import React from 'react'
import Input from '@material-tailwind/react/Input'

export default function InputText({
  error = '',
  success = '',
  placeholder = 'label',
  color = 'lightBlue',
  size='md',
  ...rest
}) {
  return (
    <Input
      type="text"
      color={color}
      size={size}
      placeholder={placeholder}
      success={success}
      error={error}
    
      {...rest}
      outline={true}
    />
  )
}
