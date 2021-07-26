import { useRouter } from 'next/dist/client/router'

export default function Espacios() {
  const {
    query: { id }
  } = useRouter()

  return (
    <>
      <div className="text-white text-5xl ">Detalles de Espacio {id} </div>
    </>
  )
}
