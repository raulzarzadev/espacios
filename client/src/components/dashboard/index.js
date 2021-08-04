import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import ICONS from 'src/ICONS'

export default function Dashboard() {
  const areas = [
    {
      title: 'Servicios',
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/status-area/services`,
      icon: ICONS.services.icon
    },
    {
      title: 'Inventarios',
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/status-area/services`,
      icon: ICONS.inventory.icon
    },
    {
      title: 'Contabilidad',
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/status-area/services`,
      icon: ICONS.accounting.icon
    },
    {
      title: 'Limpieza',
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/status-area/services`,
      icon: ICONS.cleaning.icon
    }
  ]
  return (
    <>
      <h3 className="text-white font-bold text-2xl ml-4 mt-4">Areas:</h3>
      <div className="flex flex-wrap ">
        {areas?.map((area, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <StatusCard area={area} />
          </div>
        ))}
      </div>
    </>
  )
}

const StatusCard = ({
  area: { icon, title, generalSatus, href, quantity }
}) => {
  return (
    <div className=" relative bg-white rounded-lg shadow-md flex h-24 m-4">
      <div className="absolute -top-2 left-2 shadow-md p-4 pb-1 bg-blue-100 rounded-lg flex flex-col items-center ">
        <Icon name={icon} size="4xl" />
        <div className="text-sm font-light">{`${generalSatus}%`}</div>
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <h3 className="w-full text-right text-xl pr-4 font-light">{title}</h3>
        <div className="w-full text-right pr-4 font-bold ">
          <span className="font-light text-sm"> Cantidad :</span>{' '}
          {`${quantity}`}
        </div>
        <div>
          <Link size="sm" href={href}>
            más
          </Link>
        </div>
      </div>
    </div>
  )
}
