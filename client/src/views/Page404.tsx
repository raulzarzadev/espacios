import Link from 'next/link'

export default function Page404() {
  return (
    <div className="">
      Ups! no encontramos esta página. <Link href="/">Regresemos</Link>
    </div>
  )
}
