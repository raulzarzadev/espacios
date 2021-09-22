import { InputHTMLAttributes } from 'hoist-non-react-statics/node_modules/@types/react'
import { ReactChild, ReactNode } from 'react'

export interface stylingObject {
  [index: string]: string
}
export type sizingObject = {
  [index in sizes]?: string
}
type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'tall' | 'long' | string
export interface selectOption {
  label?: string
  id: string
  title?: string
}

export interface textProps {
  label?: string
  variant?: string
  size?: sizes
  fullWidth?: boolean
  helperText?: string
  errorText?: string
  placeholder?: string
  value?: string | number
  type?: string
}
export interface selectProps extends textProps {
  options: Array<selectOption>
}

export interface textAreaProps extends textProps {
  rows?: number
}

export interface buttonProps {
  label: string | boolean
  variant?: string
  size?: string
  fullWidth?: boolean
  iconOnly?: boolean
  icon?: ReactNode
  disabled?: boolean
  onClick?: (parm: any) => void
}
