import { ReactChild, ReactNode } from 'react'

export interface stylingObject {
  [index: string]: 'xs' | 'sm' | 'md' | 'lg' | 'tall' | 'long'
}
export interface sizingObject {
  [index: string]: string
}

export interface selectOption {
  label: string
  id: string
}

export interface textProps {
  label?: string
  variant?: string
  size?: string
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
  onClick?: (parm: any) => void
}
