import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'

export default function EspaciosCard({ espacio, onClick }) {
  const router = useRouter()
  const { title, subTitle, alerts, id } = espacio
  const ALERTS = {
    inventoryStatus: {
      icon: 'inventory',
      label: 'Invetarios'
    },
    servicesStatus: {
      icon: 'electrical_services',
      label: 'Servicios'
    },
    accountingStatus: {
      icon: 'account_balance_wallet',
      label: 'Contabilidad'
    },
    maintenanceStatus: {
      icon: 'handyman',
      label: 'Mantenimiento'
    },
    cleaningStatus: {
      icon: 'cleaning_services',
      label: 'Limpieza'
    }
  }
  return (
    <div className=" group cursor-pointer max-w-xs sm:max-w-sm shadow-lg">
      <div className="relative mt-10 clear-none bg-white rounded-lg w-full h-auto p-4 flex flex-col hover:border hover:bg-gray-200">
        <div className="absolute w-20 h-16 sm:w-40 sm:h-32 -top-6 left-2 rounded-lg bg-red-200 shadow-lg ">
          <Image
            src="https://images.unsplash.com/photo-1626583223726-b259a1ba244c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            layout="fill"
            objectFit="cover"
            alt=""
            className="inital rounded-lg shadow-lg "
          />
        </div>
        <div className="sm:w-80 text-right  flex flex-col justify-end ">
          <h6 className="text-1xl font-extralight italic">{subTitle}</h6>
          <h3
            className="text-lg font-semibold"
            onClick={(e) => {
              e.preventDefault()
              onClick(id)
            }}
          >
            {title}
            <span>
              <Icon name="arrow_forward" />
            </span>
          </h3>
        </div>
        <div className="relative right-0 bottom-0 sm:w-auto w-full">
          <div className="flex flex-wrap justify-end">
            {Object.keys(alerts).map((alert, i) => (
              <div key={i} className=" flex items-center flex-col sm:m-1   ">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    router.push(`/dashboard/espacios/${id}#${alert}`)
                  }}
                  className="border-2 rounded-full p-1 bg-white flex items-center justify-center hover:bg-black hover:text-white"
                >
                  <Icon name={ALERTS[alert]?.icon} size="sm:2xl" />
                </button>
                <div className="hidden">
                  <div className="text-xs">{ALERTS[alert]?.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
