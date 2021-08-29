import {  sizingObject, stylingObject, textProps } from "./inputTypes"

export default function Text({
  placeholder = 'placeholder',
  variant = 'primary',
  label,
  helperText,
  errorText,
  size = 'sm',
  fullWidth = false,
  value,
  ...rest
}: textProps) {
 
  return (
    <label className="relative flex flex-col">
      {label && <div className="text-sm font-semibold">{label}</div>}
      <input
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

