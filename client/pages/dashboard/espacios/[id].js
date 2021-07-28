import EspacioForm from '@comps/dashboard/EspacioForm'
import { useRouter } from 'next/dist/client/router'

export default function Espacios() {
  const {
    query: { id }
  } = useRouter()
  const espacio = {
    id: '1',
    title: 'Casa Rangel',
    subtitle: 'LPZ Rangel-A',
    description: '',
    subEspacios: [],
    
  }

  return (
    <>
      <EspacioForm espacio={espacio} title='Detalles'/>
    </>
  )
}
