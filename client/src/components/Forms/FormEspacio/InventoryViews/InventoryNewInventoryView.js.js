import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'

export default function InventoryNewInventoryView({ espacio: { areas, name } }) {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="w-6/12 flex justify-center">Item</div>
        <div className="w-6/12 flex flex-col items-center justify-center">
          Cantidades
        </div>
      </div>
      {areas.map((area, i) => (
        <AreaRow key={i} area={area} />
      ))}
    </div>
  )
}
const AreaRow = ({ area }) => {
  return (
    <div>
      <div className=" flex ">
        <div className="font-bold w-full  flex">
          <div className="w-full">
            {area?.name}
            <span className=" text-sm">x{area?.quantity}</span>{' '}
          </div>
          <div className=" font-normal text-center flex justify-between w-full text-xs items-center ">
            <div className="w-full  truncate ">ult.</div>
            <div className="w-full  truncate ">actual</div>
            <div className="w-full  truncate ">ideal</div>
            <div className="w-full  truncate ">falta</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col">
        {area?.items?.map((item, i) => (
          <div key={i} className=" flex justify-between ">
            <div className="pl-2 w-8/12 flex items-center  justify-start text-sm">
              {item?.name}
            </div>
            <div className="w-1/6  flex items-center justify-center">0</div>
            <div className="w-1/6 flex items-center justify-center">0</div>
            <div className="w-1/6  flex items-center justify-center">
              {item?.quantity * area?.quantity}
            </div>
            <div className="w-1/6 flex items-center justify-center">0</div>
          </div>
        ))}
      </div>
    </div>
  )
}
