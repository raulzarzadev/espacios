import { sizingObject, stylingObject, textProps } from './inputTypes'
import React from 'react'
import { ForwardedRef } from 'hoist-non-react-statics/node_modules/@types/react'
import { format } from 'date-fns'

const InputDate = React.forwardRef(
  (
    {
      placeholder = 'placeholder',
      variant = 'primary',
      label,
      helperText,
      errorText,
      size = 'sm',
      fullWidth = false,
      value,
      ...rest
    }: textProps,
    ref: ForwardedRef<any>
  ) => {
    const defaultValue = format(new Date(), 'yyyy-MM-dd')
    return (
      <label className="relative flex flex-col">
        {label && <div className="text-sm font-semibold">{label}</div>}
        <input
          defaultValue={defaultValue}
          type="date"
          ref={ref}
          placeholder={placeholder}
          className={`
          ${styling[variant]} 
          ${sizing[size]}
          ${fullWidth ? `w-full` : ` max-w-max`}
          rounded-lg
          min-w-[50px]
          min-h-[10px]
          shadow-lg
          border
          text-right
          bg-white-light
        `}
          {...rest}
        />
        {helperText && !errorText && (
          <span className="text-sm opacity-50">{helperText}</span>
        )}
        {errorText && <span className="text-sm text-danger">{errorText}</span>}
      </label>
    )
  }
)

export const styling: stylingObject = {
  primary: `bg-white`,
  secondary: ``,
  third: ``
}
export const sizing: sizingObject = {
  sm: `py-[1px] px-2 `,
  md: `py-1 px-2`,
  lg: `py-2 px-3`
}

InputDate.displayName = 'InputDate'
export default InputDate
