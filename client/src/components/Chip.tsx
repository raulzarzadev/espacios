export default function Chip({
  label = 'label',
  color = 'primary',
  size = 'sm',
  fullWidth = false,
  ...rest
}: chipProps) {
  const styling: stylingObject = {
    primary: `bg-prim`,
    secondary: `bg-secon`,
    third: `bg-third`
  }
  const sizing: sizingObject = {
    sm: `py-0.5 px-2 `,
    md: `py-1 px-2`,
    lg: `py-2 px-3`
  }
  return (
    <button
      className={`
        ${styling[color]} 
        ${sizing[size]}
        ${fullWidth ? `w-full` : ` max-w-max`}
        rounded-full
        min-w-[50px]
        min-h-[10px]
       
        shadow-lg
        `}
      {...rest}
    >
      {label}{' '}
    </button>
  )
}

interface stylingObject {
  [index: string]: string
}
interface sizingObject {
  [index: string]: string
}
interface chipProps {
  label: string
  color?: string
  size?: string
  fullWidth?: boolean
}
