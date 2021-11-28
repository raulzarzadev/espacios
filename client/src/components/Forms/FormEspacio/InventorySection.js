import Counter from '@comps/inputs/Counter2'
import { useState, useEffect } from 'react'
export default function InventorySection({ areas }) {
  console.log(`areas`, areas)
  return (
    <div className="">
      <div className="flex ">
        <div className="w-1/3 flex justify-center">Item</div>
        <div className="w-1/3 flex justify-center">esperado</div>
        <div className="w-1/3 flex justify-center">fisico</div>
      </div>
      {areas?.map((area, i) => (
        <div key={i}>
          <div className="font-bold">{area?.name}</div>
          <div>
            {area?.items?.map((item, i) => (
              <div key={i} className="flex justify-between">
                <div className="w-1/3 flex justify-start">{item?.name}</div>
                <div className="w-1/3 flex justify-center">
                  {item?.quantity * area?.quantity}
                </div>
                <div className="w-1/3 flex justify-center items-center">
                  <Counter />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
