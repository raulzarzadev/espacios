import { sizingObject } from '@comps/inputs/inputTypes'
import ICON_LIST from './icon-list'

export default function Icon({
  name = '',
  size = 'md'
}: {
  name: string
  size?: string
}) {
  const Icon = ICON_LIST[name]
  if(!Icon) return name
  return <Icon size={sizign[size]}/>
}

const sizign : sizingObject = {
  sm: '1rem',
  md: '1.4rem',
  lg: '2rem'
}
