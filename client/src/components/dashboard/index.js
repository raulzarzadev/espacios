import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import ICONS from 'src/ICONS'

export default function Dashboard() {
  const admin = [
    {
      ...ICONS.services,
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/administration/services`
    },
    {
      ...ICONS.accounting,
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/administration/accounting`
    }
  ]
  const operation = [
    {
      ...ICONS.inventory,
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/operation/inventory`
    },
    {
      ...ICONS.maintenance,
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/opetation/maintenance`
    },
    {
      ...ICONS.cleaning,
      generalSatus: 83,
      quantity: 32,
      href: `/dashboard/opetation/cleaning`
    }
  ]
  const espacios = [
    {
      ...ICONS.espacios,
      generalSatus: 99,
      quantity: 23,
      href: `/dashboard/espacios`
    },
    {
      ...ICONS.subEspacios,
      generalSatus: 0,
      quantity: 7,
      href: '/dashboard/espacios/sub-espacios'
    },
    {
      ...ICONS.items,
      generalSatus: 0,
      quantity: 56,
      href: '/dashboard/espacios/items'
    },
    {
      ...ICONS.consumables,
      generalSatus: 0,
      quantity: 14,
      href: '/dashboard/espacios/consumables'
    }
  ]
  return (
    <>
      <h3 className="text-white font-bold text-2xl ml-4 mt-4">Espacios:</h3>
      <div className="flex flex-wrap ">
        {espacios?.map((espacio, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <StatusCard area={espacio} />
          </div>
        ))}
      </div>
      <h3 className="text-white font-bold text-2xl ml-4 mt-4">Operación:</h3>
      <div className="flex flex-wrap ">
        {operation?.map((area, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <StatusCard area={area} />
          </div>
        ))}
      </div>
      <h3 className="text-white font-bold text-2xl ml-4 mt-4">
        Administración:
      </h3>
      <div className="flex flex-wrap ">
        {admin?.map((area, i) => (
          <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <StatusCard area={area} />
          </div>
        ))}
      </div>
    </>
  )
}

const StatusCard = ({
  area: { icon, label, generalSatus, href, quantity }
}) => {
  return (
    <div className=" relative bg-white rounded-lg shadow-md flex h-24 m-4">
      <div className="absolute -top-2 left-2 shadow-md p-4 pb-1 bg-blue-100 rounded-lg flex flex-col items-center ">
        <Icon name={icon} size="4xl" />
        <div className="text-sm font-light">{`${generalSatus}%`}</div>
      </div>
      <div className="w-full flex justify-center items-center flex-col">
        <h3 className="w-full text-right text-2xl md:text-sm pr-4 md:font-light">
          {label}
        </h3>
        <div className="w-full text-right pr-4 font-bold ">
          <span className="font-light text-xs"> Cantidad :</span>{' '}
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
