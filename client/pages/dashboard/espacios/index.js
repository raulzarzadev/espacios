import ESpaciosCard from '@comps/dashboard/EspaciosCard'
import Sidebar from '@comps/dashboard/Sidebar'

export default function Espacios() {
  const espacio={
    title:'Espacio 1',
    subTitle:'Subtitulo',
    description:'Descripcion',
    image:'https://placehold.it/350x150',
    link:'https://google.com'
    
  }
  return (
    <div>
      <Sidebar />
      <div>
        <ESpaciosCard espacio={espacio} />
      </div>
    </div>
  )
}
