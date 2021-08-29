import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h3>Hola, bienvenido a espacios</h3>
      <div>
        Ahora estamos trabajando en los componentes, puedes verlos aqui
        <Link href="/viusal-guide"><a className='m-3 underline'>Guia visual</a></Link>
      </div>
    </div>
  )
}
