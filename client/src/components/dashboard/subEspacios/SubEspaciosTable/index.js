import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { CONSUMABLES, ITEMS } from 'pages/api/HARD_DATA'
import ICONS from 'src/ICONS'

export default function SubEspaciosTable({ data = [] }) {
  const subEspacios = data
  return (
    <div>
      <div>
        {subEspacios.map(
          ({ id, label, items, description, category, consumables }) => (
            <div
              key={id}
              className="flex justify-between bg-blue-300 m-2 p-1 rounded-lg mt-6 shadow-md"
            >
              <div className="relative w-1/5">
                <h4 className="font-bold text-xs">Titulo</h4>
                {label}
                <div className="absolute -top-4 left-10 bg-blue-200 flex rounded-lg p-0.5">
                  {category.map((cat, i) => (
                    <Icon key={i} name={ICONS[cat]?.icon} size="2xl" />
                  ))}
                </div>
              </div>
              <div className="">
                <h4 className="font-bold text-xs">Descripción</h4>
                {description}
              </div>
              <div className="hidden w-1/5 sm:block">
                <h4 className="font-bold text-xs">Items</h4>
                {items?.map((item, i) => (
                  <div key={i}>
                    {ITEMS.find(({ id }) => id === item)?.label}
                  </div>
                ))}
              </div>
              <div className="hidden w-1/5 sm:block">
                <h4 className="font-bold text-xs">Consumibles</h4>
                {consumables?.map((consumable, i) => (
                  <div key={i} className="">
                    {CONSUMABLES.find(({ id }) => id === consumable)?.label}
                  </div>
                ))}
              </div>
              <div>
                <Link size="sm" href={`/dashboard/espacios/sub-espacios/${id}`}>
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
