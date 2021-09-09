import { selectProps, sizingObject, stylingObject } from './inputTypes'

export default function Select({
  placeholder = 'placeholder',
  variant = 'primary',
  label,
  helperText,
  errorText,
  size = 'sm',
  fullWidth = false,
  options = [],
  value,
  ...rest
}: selectProps) {
  return (
    <label className="relative">
      {label && <div className="text-sm font-semibold">{label}</div>}
      <select
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
        {...rest}
        defaultValue=""
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
        {options.map(({ label, id }) => (
          <option key={id} value={id} className="text-black text-opacity-100">
            {label}
          </option>
        ))}
      </select>
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
