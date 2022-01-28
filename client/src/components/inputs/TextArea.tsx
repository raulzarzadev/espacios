import { sizingObject, stylingObject, textAreaProps } from './inputTypes'
import React from 'react'
import { ForwardedRef } from 'hoist-non-react-statics/node_modules/@types/react'

// TODO fix this
// eslint-disable-next-line react/display-name
const TextArea = React.forwardRef(
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
      rows = 4,
      ...rest
    }: textAreaProps,
    ref: ForwardedRef<any>
  ) => (
    <label className="relative">
      {label && <div className="text-sm font-semibold">{label}</div>}
      <textarea
        ref={ref}
        rows={rows}
        value={value}
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
          bg-white-light
          resize-none
          `}
        {...rest}
      />
      {helperText && !errorText && (
        <span className="text-sm opacity-50">{helperText}</span>
      )}
      {errorText && <span className="text-sm text-danger">{errorText}</span>}
    </label>
  )
)

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

export default TextArea
