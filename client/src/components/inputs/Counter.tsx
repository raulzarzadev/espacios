import Icon from '@comps/Icon'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Counter({ value, setValue = () => {} }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (value) {
      setCount(value)
    }
  }, [value])

  useEffect(() => {
    setValue(count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])
  return (
    <div className="flex border rounded-lg max-w-max shadow-lg">
      <button
        className="border-r  px-1"
        onClick={() => setCount(count > 0 ? count - 1 : count)}
      >
        <Icon name="minus" />
      </button>

      <div className=" px-2 max-w-min appearance-none">{count}</div>
      <button className="border-l px-1  " onClick={() => setCount(count + 1)}>
        <Icon name="plus" />
      </button>
    </div>
  )
}
