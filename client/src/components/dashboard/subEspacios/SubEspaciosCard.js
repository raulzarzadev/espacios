import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

export default function SubEspaciosCard({ espacio, onClick }) {
  const router = useRouter()
  const { label, description, id, images = [] } = espacio

  return (
    <div
      className=" group cursor-pointer max-w-xs sm:max-w-sm sha"
      onClick={(e) => {
        e.preventDefault()
        onClick(id)
      }}
    >
      <div className="relative mt-10 clear-none bg-white rounded-lg w-full h-auto p-4 flex flex-col hover:border hover:bg-gray-200">
        <div className="absolute w-20 h-16 sm:w-40 sm:h-32 -top-6 left-2 rounded-lg bg-red-200 shadow-lg ">
          {images?.length > 0 && (
            <Image
              src={images[0]}
              layout="fill"
              objectFit="cover"
              alt=""
              className="inital rounded-lg shadow-lg "
            />
          )}
        </div>
        <div className="sm:w-80 text-right  flex flex-col justify-end ">
          <h3 className="text-lg font-semibold">
            {label}
            <span>
              <Icon name="arrow_forward" />
            </span>
          </h3>
          <h6 className=" font-extralight italic">{description}</h6>
        </div>
        <div className="relative right-0 bottom-0 sm:w-auto w-full">
          <div className="flex flex-wrap justify-end"></div>
        </div>
      </div>
    </div>
  )
}
