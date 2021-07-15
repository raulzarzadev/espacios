import React from 'react'
import TWInput from '@material-tailwind/react/InputIcon'

export default function Input({
  error = '',
  success = '',
  placeholder = 'label',
  Icon = '', // Material Icon Library https://fonts.google.com/icons
  ...rest
}) {
  return (
    <TWInput
      type="text"
      color="lightBlue"
      size="sm"
      outline={false}
      placeholder={placeholder}
      success={success}
      error={error}
      iconName={Icon}
      {...rest}
    />
  )
}
