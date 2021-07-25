import ESpaciosCard from '@comps/dashboard/EspaciosCard'
import LayoutDashboard from '@comps/Layout/Dasboard'
import { useRouter } from 'next/dist/client/router'
export default function Espacios() {
  const router = useRouter()
  const espacio = {
    title: 'Espacio 1',
    subTitle: 'Subtitulo',
    description: 'Descripcion',
    image: 'https://placehold.it/350x150',
    link: 'https://google.com'
  }
  const handleEspacioClick = (id) => {
    console.log('id', id)
    router.push(`/dashboard/espacios/${id}`)
  }
  return (
    <LayoutDashboard>
      <h3 className="text-white text-3xl text-center p-6">Espacios</h3>
      <div className="flex flex-col gap-2 p-2 py-8">
        <ESpaciosCard espacio={espacio} onClick={handleEspacioClick} />
        <ESpaciosCard espacio={espacio} onClick={handleEspacioClick} />
        <ESpaciosCard espacio={espacio} onClick={handleEspacioClick} />
      </div>
    </LayoutDashboard>
  )
}
