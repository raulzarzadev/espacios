import NextLink from 'next/link'
import Button from '@material-tailwind/react/Button'
export default function Link({
  href = '#',
  children = 'link',
  label = null,
  iconOnly = false,
  size='regular',
  ...rest
}) {
  return (
    <NextLink href={href}>
      <Button
        color="white"
        buttonType="link"
        size={size}
        rounded={true}
        block={false}
        iconOnly={iconOnly}
        ripple="dark"
        
        {...rest}
      >
        {children || label}
      </Button>
    </NextLink>
  )
}
