import React, { useState } from 'react'
import TWDropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import DropdownLink from '@material-tailwind/react/DropdownLink'

export default function InputSelect({
  color,
  options = [{ label: 'select', value: '' }],
  ...rest
}) {
  const [selected, setSelected] = useState(0)
  const handleSelect = (value) => {
    setSelected(value)
  }
  console.log('selected', selected)

  return (
    <TWDropdown
      color="lightBlue"
      placement="bottom-start"
      buttonText={options[selected]?.label}
      buttonType="filled"
      size="sm"
      rounded={false}
      block={true}
      ripple="light"
      {...rest}
    >
      {options.map((option, index) => (
        <DropdownItem
          onClick={() => handleSelect(index)}
          key={index}
          color="lightBlue"
          ripple="light"
        >
          {option?.label}
        </DropdownItem>
      ))}
    </TWDropdown>
  )
}
