import Link from '@comps/Link'
import Image from 'next/image'
import { testImage } from 'src/assets/images'

export default function EspacioCard({ espacio }: { espacio: espacioType }) {
  return (
    <Link href={`/espacios/${espacio.id}`}>
      <div className="relative min-w-[15rem] h-24  rounded-2xl flex shadow-xl hover:shadow-none active:opacity-90">
        <div className="relative w-2/6 h-full rounded-l-2xl">
          <Image
            src={espacio?.images?.[0]?.href || testImage}
            className=" rounded-l-2xl"
            objectFit="cover"
            layout="fill"
            alt="Espacio-area"
          />
        </div>
        <div className="w-4/6 flex flex-col p-2">
          <div className="text-sm font-bold my-1">{espacio.name}</div>
          <div className="text-sm  opacity-50">{espacio.address}</div>
        </div>
      </div>
    </Link>
  )
}
export interface espacioType {
  id: string
  name: string
  address: string
  images?: Array<imageType>
  contracts?: Array<contractsType>
  services?: Array<string>
  coments?: string
  doorPassword?: string
  advertLink?: string
  guests?: number
}

export interface contractsType {
  title: string
  images: Array<imageType>
}

export interface imageType {
  title: string
  description: string
  href: string
}
