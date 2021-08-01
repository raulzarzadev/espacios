import Card from '@material-tailwind/react/Card'
import CardRow from '@material-tailwind/react/CardRow'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardStatus from '@material-tailwind/react/CardStatus'
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter'
import Icon from '@material-tailwind/react/Icon'
import Image from 'next/image'

export default function EspaciosCard({ espacio, onClick, }) {
  const { title, subTitle, alerts,id } = espacio
  console.log('alertss', alerts)
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
    <button
      className=" group cursor-pointer max-w-sm"
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
        <div className="  bg-gray-200 h-10 absolute right-1 -top-5 w-40 sm:w-auto">
          <div className='flex flex-wrap'>
            {Object.keys(alerts).map((alert, i) => (
              <div key={i} className=" flex items-center flex-col sm:m-1  ">
                <div className=''>
                  <Icon name={ALERTS[alert]?.icon} size='3xl' />
                </div>
                <div className="hidden ">
                  <div className='text-xs'>
                  {ALERTS[alert]?.label}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="absolute right-1 -top-5 w-40 md:h-20 sm:w-auto   md:right-10  flex justify-around flex-wrap ">
          {Object.keys(alerts).map((alert, i) => (
            <div key={i} className="md:m-2 flex items-center flex-col">
              <div>
                <Icon name={ALERTS[alert]?.icon} size="3xl" />
              </div>
              <div className=" hidden  sm:block text-xs">{ALERTS[alert]?.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </button>
  )
}
