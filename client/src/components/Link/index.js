import NextLink from 'next/link'
import Button from '@material-tailwind/react/Button'
export default function Link({
  href = '#',
  children = 'link',
  label = null,
  iconOnly = false,
  ...rest
}) {
  return (
    <NextLink href={href}>
      <Button
        color="lightBlue"
        buttonType="link"
        size="regular"
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
