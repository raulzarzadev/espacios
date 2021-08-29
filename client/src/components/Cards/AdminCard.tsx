import Image from 'next/image'
import { testImage } from 'src/assets/images'

export default function AdminCard({
  label = 'label',
  bgImage = testImage
}) {
  return (
    <div className="group relative min-h-[8rem] min-w-[8rem] rounded-lg shadow-xl ">  
      <Image
        src={bgImage}
        layout="fill"
        objectFit="cover"
        alt="admin-area"
        className=" opacity-60 rounded-lg "
      />
      <span className="absolute top-[calc(50%-12px)] left-0 right-0 text-center text-lg font-semibold hover:">
        {label}
      </span>
    </div>
  )
}
