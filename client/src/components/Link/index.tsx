import NextLink from 'next/link'
import { ReactNode } from 'react'

export default function Link({
  href,
  children
}: {
  href: string
  children: ReactNode | string
}) {
  return (
    <NextLink href={href}>
      <a className="">{children}</a>
    </NextLink>
  )
}
