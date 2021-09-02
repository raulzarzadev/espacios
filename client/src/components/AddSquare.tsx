import Icon from './Icon'
import { sizingObject } from './inputs/inputTypes'

export default function AddSquare({ size = 'tall', ...rest }) {
  return (
    <button
    className={`
    min-w-[3rem] 
    min-h-[3rem] 
    m-1 border 
    hover:border-2 
    border-dashed 
    rounded-lg 
    flex 
    justify-center 
    items-center 
    shadow-lg
    ${sizging[size]}
    `}
    {...rest}
    >
      <Icon name="plus" />
    </button>
  )
}

const sizging: sizingObject = {
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-20 w-20',
  tall: 'h-20 w-16'
}