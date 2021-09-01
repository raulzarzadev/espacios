import Icon from './Icon'
import Button from './inputs/Button'
import { sizingObject, stylingObject } from './inputs/inputTypes'
import Link from './Link'

export default function Alert({
  variant,
  title = 'Alert title',
  description = 'Alert description',
  fullWidth = false,
  link='',
  handleClose = () => {}
}: alertProps) {
  return (
    <div className="bg-white-light">
      <div
        className={`
      bg-teal-100 
      border-t-4 
      rounded-b     
      px-4 
      py-3 
      shadow-md
      bg-opacity-10
      min-w-[300px]
        
      ${stylingAlert[variant]}
      ${fullWidth && `w-full`}
      `}
        role="alert"
      >
        <div className="flex">
          <div className="py-1">
            <Icon name="info" />
          </div>
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm">
              {description}{' '}
              <span className='underline'>{!!link && <Link href={link}>Click aquí!</Link>} </span>
            </p>
          </div>
          <button onClick={handleClose}>
            <Icon name="cross" />
          </button>
        </div>
      </div>
    </div>
  )
}
interface alertProps {
  variant: string
  title: string
  description: string
  fullWidth?: boolean
  handleClose?: (param: any) => void
  link?: string
}
export const sizingButton: sizingObject = {
  xs: `px-0.5 py-0.5`,
  sm: `px-1 py-1`,
  md: `px-2 py-2`,
  lg: `px-3 py-3`
}
export const stylingAlert: stylingObject = {
  danger: `border-danger bg-danger text-danger-dark`,
  warning: `border-warning bg-warning text-warning-dark `,
  info: `border-info bg-info  text-info-dark`,
  success: `border-success bg-success text-success-dark `
}
