import Icon from '@comps/Icon'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Counter = React.forwardRef(function Counter({ ...props }: any, ref) {
  return (
    <div className="flex border rounded-lg max-w-max shadow-lg">
      <input
        ref={ref}
        className="rounded-lg p-1 text-center min-w-[2.5rem] max-w-[3.2rem]  "
        {...props}
        min={0}
        max={999}
        placeholder="0"
        type="number"
        pattern="[0-9]*"
        inputMode="numeric"
      />
    </div>
  )
})

export default Counter
