import React from 'react'
import { selectProps, sizingObject, stylingObject } from './inputTypes'
import { ForwardedRef } from 'hoist-non-react-statics/node_modules/@types/react'

const Select = React.forwardRef(
  (
    {
      placeholder = 'placeholder',
      variant = 'primary',
      label,
      helperText,
      errorText,
      size = 'sm',
      fullWidth = false,
      options = [],
      ...rest
    }: selectProps,
    ref: ForwardedRef<any>
  ) => (
    <label className="relative">
      {label && <div className="text-sm font-semibold">{label}</div>}
      <select
        ref={ref}
        className={`
          ${styling[variant]} 
          ${sizing[size]}
          ${fullWidth ? `w-full` : ` max-w-max`}
          rounded-lg
          min-w-[50px]
          min-h-[10px]
          shadow-lg
          border
          border-black
          py-1
          `}
        defaultValue=""
        {...rest}
      >
        {placeholder && (
          <option
            value=""
            className=" text-black text-opacity-50
     "
          >
            {placeholder}
          </option>
        )}
        {options.map(({ label, title, id }) => (
          <option key={id} value={id} className="text-black text-opacity-100">
            {label || title}
          </option>
        ))}
      </select>
      {helperText && !errorText && (
        <span className="text-sm opacity-50">{helperText}</span>
      )}
      {errorText && <span className="text-sm text-danger">{errorText}</span>}
    </label>
  )
)
Select.displayName = 'Select'
export default Select

export const styling: stylingObject = {
  primary: `bg-white`,
  secondary: ``,
  third: ``
}
export const sizing: sizingObject = {
  sm: `py-0.5 px-2 `,
  md: `py-1 px-2`,
  lg: `py-2 px-3`
}
