import Icon from '@comps/Icon'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex border rounded-lg max-w-max shadow-lg">
      <button
        className="border-r  px-1"
        onClick={() => setCount(count > 0 ? count - 1 : count)}
      >
        <Icon name="minus" />
      </button>
      <div className=" px-2">{count}</div>
      <button className="border-l px-1 " onClick={() => setCount(count + 1)}>
        <Icon name="plus" />
      </button>
    </div>
  )
}
