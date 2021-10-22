import { buttonProps, sizingObject, stylingObject } from './inputTypes'

export default function Button({
  variant = 'primary',
  label = 'button',
  size = 'md',
  fullWidth = false,
  disabled,
  iconOnly,
  icon,
  type = 'submit',
  loading = false,
  ...rest
}: buttonProps) {
  return (
    <button
      type={type}
      disabled={disabled && loading}
      className={`
              ${stylingButton[variant]} 
              ${(disabled && stylingButton.disabled) || loading}
              ${sizingButton[size]}
              ${iconOnly ? `rounded-full` : 'rounded-md min-w-[50px]'}
              ${fullWidth ? `w-full` : ` max-w-max`}
              min-h-[10px]
              shadow-lg
              border
              border-transparent
              transform hover:opacity-90 active:shadow-none
              
              font-normal
          `}
      {...rest}
    >
      {loading ? (
        <Loading />
      ) : iconOnly ? (
        <div className="">{icon}</div>
      ) : (
        <div className="flex justify-evenly items-center">
          {label}
          {icon && <span className="ml-1">{icon}</span>}
        </div>
      )}
    </button>
  )
}
const Loading = () => (
  <div className="flex justify-center items-center">
    <div className="border-4 rounded-full w-7 h-7 border-t-transparent animate-spin"></div>
  </div>
)
export const sizingButton: sizingObject = {
  xs: `px-0.5 py-0.5`,
  sm: `px-1 py-1`,
  md: `px-2 py-2`,
  lg: `px-3 py-3`
}
export const stylingButton: stylingObject = {
  primary: `bg-prim text-white font-semibold`,
  secondary: `bg-secon text-white font-semibold`,
  third: `bg-third `,
  outlined: `bg-transparent border-black font-semibold`,
  disabled: 'bg-black-light bg-opacity-50 shadow-none ',
  link: 'shadow-none  '
}
