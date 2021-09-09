import { sizingObject, stylingObject, textAreaProps } from './inputTypes'

export default function TextArea({
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
}: textAreaProps) {
  return (
    <label className="relative">
      {label && <div className="text-sm font-semibold">{label}</div>}
      <textarea
        rows={rows}
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
      {helperText && !errorText && <span>{helperText}</span>}
      {errorText && <span>{errorText}</span>}
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
