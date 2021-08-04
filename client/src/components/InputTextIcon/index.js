import React from 'react'
import TWInput from '@material-tailwind/react/InputIcon'

export default function InputTextIcon({
  error = '',
  success = '',
  placeholder = 'label',
  Icon = '', // Material Icon Library https://fonts.google.com/icons
  color = 'lightBlue',
  ...rest
}) {
  return (
    <TWInput
      type="text"
      color={color}
      size="sm"
      outline={true}
      placeholder={placeholder}
      success={success}
      error={error}
      
      iconName={Icon}
      {...rest}
    />
  )
}
