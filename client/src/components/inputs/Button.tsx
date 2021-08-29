import { buttonProps, sizingObject, stylingObject } from './inputTypes'

export default function Button({
  variant = 'primary',
  label = 'button',
  size = 'md',
  fullWidth = false,
  iconOnly,
  icon,
  ...rest
}: buttonProps) {
  return (
    <button
      className={`
              ${stylingButton[variant]} 
              ${sizingButton[size]}
              ${iconOnly ? `rounded-full` : 'rounded-md min-w-[50px]'}
              ${fullWidth ? `w-full` : ` max-w-max`}
              
              min-h-[10px]
              shadow-lg
              border
              border-transparent
              transform hover:opacity-90 active:shadow-none
              font-semibold
          `}
      {...rest}
    >
      {iconOnly ? (
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
export const sizingButton: sizingObject = {
  xs: `px-0.5 py-0.5`,
  sm: `px-1 py-1`,
  md: `px-2 py-2`,
  lg: `px-3 py-3`
}
export const stylingButton: stylingObject = {
  primary: `bg-prim text-white`,
  secondary: `bg-secon text-white`,
  third: `bg-third `,
  outlined: `bg-transparent border-black  `
}
