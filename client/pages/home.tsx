import AdminCard from '@comps/Cards/AdminCard'
import Head from '@comps/Head'
import Link from '@comps/Link'

export default function home() {
  return (
    <>
      <Head title="Inicio" />
      <div>
        <div>
          <h3>Administración</h3>
          <div className="flex flex-wrap max-w-sm mx-auto">
            <div className="w-1/2 p-1 transform  ">
              <Link href='/espacios'>
                <AdminCard label="Espacios" />
              </Link>
            </div>
            <div className="w-1/2 p-1 ">
              <AdminCard label="Inventarios" />
            </div>
            <div className="w-1/2 p-1 ">
              <AdminCard label="Servicios" />
            </div>
          </div>
        </div>
        <div>
          <h3>Operacion</h3>
          <div className="flex flex-wrap max-w-sm mx-auto">
            <div className="w-1/2 p-1 ">
              <AdminCard label="Limpieza" />
            </div>
            <div className="w-1/2 p-1 ">
              <AdminCard label="Reportes" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
