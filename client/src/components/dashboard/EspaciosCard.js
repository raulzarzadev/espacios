import Card from '@material-tailwind/react/Card'
import CardRow from '@material-tailwind/react/CardRow'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardStatus from '@material-tailwind/react/CardStatus'
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

export default function EspaciosCard({
  title = 'Espacio 1',
  subTitle = 'Subtitulo',
  description = 'Descripcion',
  image = 'https://placehold.it/350x150',
  link = 'https://google.com',
  color = '#F44336',
  icon = 'lock',
  id = false,
  onClick = () => {}
}) {
  return (
    <button
      className=" group cursor-pointer"
      onClick={(e) => {
        e.preventDefault()
        onClick(id)
      }}
    >
      <div className="relative  mt-10 clear-none bg-white rounded-lg w-full h-auto p-4 flex hover:border hover:bg-gray-200">
        <div className="relative w-60 h-32 -top-10 rounded-lg bg-red-200 shadow-lg ">
          <div className="opacity-50 group-hover:opacity-100 group-focus:opacity-100 hover:border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1626583223726-b259a1ba244c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              layout="fill"
              objectFit="fill"
              alt=""
              className="inital rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="w-full text-right pr-6 flex flex-col justify-end ">
          <h3 className="text-3xl">{title}</h3>
          <h6 className="text-2xl font-extralight">{subTitle}</h6>
        </div>
        <div className="absolute right-1 -top-5 w-40 h-20 md:w-52 md:right-10 bg-gray-200 flex justify-around ">
          <div>H</div>
          <div>F</div>
          <div>G</div>
        </div>
      </div>
    </button>
  )
}
