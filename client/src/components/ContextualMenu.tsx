import Link from './Link'

export default function ContextualMenu({
  links = []
}: {
  links: Array<linkType>
}) {
  return (
    <div className="shadow-md mb-4">
      <div className="flex overflow-auto  max-w-[90vw] py-2 mx-auto">
        {links.map(({ label, href }) => (
          <div key={label} className="mx-2 my-1">
            <Link href={href}>{label}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
interface linkType {
  href: string
  label: string
}
/* 
<div className="mx-2 my-1">
          <Link href="#services">Servicio</Link>
        </div>
        <div className="mx-2 my-1">
          <Link href="#areas">Areas</Link>
        </div>
        <div className="mx-2 my-1">
          <Link href="#contract">Contratos</Link>
        </div> */
