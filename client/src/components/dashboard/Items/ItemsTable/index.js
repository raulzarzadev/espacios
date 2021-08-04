import InputTextIcon from '@comps/InputTextIcon'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import InputIcon from '@material-tailwind/react/InputIcon'
import { CONSUMABLES, ITEMS } from 'pages/api/HARD_DATA'
import ICONS from 'src/ICONS'

export default function ItemsTable({ data = [] }) {
  const subEspacios = data
  return (
    <div>
      <h3 className="text-white font-bold text-2xl m-2 p-2">Items </h3>
      <div className='flex p-3'>
        <InputTextIcon Icon="search" placeholder='Buscar' />
      </div>
      <div>
        {subEspacios.map(
          ({ id, label, items, description, category, consumables }) => (
            <div
              key={id}
              className="flex justify-between bg-blue-300 m-2 p-1 rounded-lg mt-6 shadow-md pt-2"
            >
              <div className="relative w-1/5">
                <h4 className="font-bold text-xs">Titulo</h4>
                {label}
                <div className="absolute -top-6 left-10 flex ">
                  {category.map((cat, i) => (
                    <div
                      key={i}
                      className="bg-blue-200 flex rounded-lg p-0.5 ml-0.5"
                    >
                      <Icon name={ICONS[cat]?.icon} size="xl" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/2">
                <h4 className="font-bold text-xs">Descripción</h4>
                {description}
              </div>

              <div>
                <Link size="sm" href={`/dashboard/espacios/items/${id}`}>
                  ver
                </Link>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
