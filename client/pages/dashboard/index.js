import Link from '@comps/Link'

export default function Dashboard() {
  return (
    <>
      <h3 className="text-white font-bold text-4xl">Inicio de dashboard</h3>
      <Link href="/dashboard/espacios">
        <span className="text-white">Espacios</span>
      </Link>
    </>
  )
}
