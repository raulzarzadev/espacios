import AdminCard from '@comps/Cards/AdminCard'
import Link from '@comps/Link'
export default function Home() {
  return (
    <div className='max-w-md mx-auto'>
      <div >
        <h3 className='text-xl font-bold'>Administración</h3>
        <div className="flex flex-wrap max-w-sm mx-auto">
          <div className="w-1/2 p-1 transform  ">
            <Link href="/espacios">
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
        <h3 className='text-xl font-bold'>Operacion</h3>
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
  )
}
