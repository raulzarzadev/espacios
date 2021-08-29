import Image from 'next/image'
import { testImage } from 'src/assets/images'

export default function EspacioCard({ image = testImage }) {
  return (
    <div className="relative min-w-[15rem] h-24  rounded-2xl flex shadow-xl">
      <div className="relative w-2/6 h-full rounded-l-2xl">
        <Image
          src={image}
          className=" rounded-l-2xl"
          objectFit="cover"
          layout="fill"
          alt="Espacio-area"
        />
      </div>
      <div className="w-4/6 flex flex-col p-2">
        <div className='text-sm font-bold my-1'>Titulo del espacio #1</div>
        <div className='text-sm  opacity-50'>Dirección cerrada #1415, El Manglito, La Paz, BCS, 23060</div>
      </div>
    </div>
  )
}
