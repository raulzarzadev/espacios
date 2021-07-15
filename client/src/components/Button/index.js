import React from 'react'
import TWButton from '@material-tailwind/react/Button'
import TWIcon from '@material-tailwind/react/Icon'

export default function Button({
  label = 'label',
  children,
  block = false,
  iconOnly = false,
  Icon = false, // Icons from https://fonts.google.com/icons or https://fontawesome.com/v5.15/icons?d=gallery&p=2
  rounded = false,
  buttonType = 'filled',
  color = 'lightBlue',
  size = 'sm',
  ...rest
}) {
  return (
    <TWButton
      color={color}
      buttonType={buttonType}
      size={size}
      rounded={rounded}
      block={block}
      iconOnly={iconOnly}
      ripple="light"
      {...rest}
    >
      {Icon ? <TWIcon name={Icon} /> : null}
      {children || label}
    </TWButton>
  )
}
