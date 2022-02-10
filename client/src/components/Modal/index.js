import Division from '@comps/Division'
import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import React, { useEffect, useState } from 'react'

export default function Modal({
  title = 'Modal title',
  open,
  children,
  handleClose,
  modalId
}) {
  const [opacity, setOpacity] = useState(true)
  useEffect(() => {
    setOpacity(open)
  }, [open])
  return (
    <div
      className={` 
          w-full 
          inset-0 
          z-50 
          overflow-hidden 
          flex 
          justify-center 
          items-center 
          transition-opacity
          duration-500
          ${opacity ? 'opacity-100' : 'opacity-0'}
          ${open ? 'fixed' : 'hidden'}
          `}
      id={`modal-${title}-${modalId}`}
      style={{ background: 'rgba(0, 0, 0, 0.7)' }}
    >
      <div
        className={`relative bg-white w-full sm:w-6/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-40 overflow-y-auto max-h-screen text-left `}
      >
        <header
          className={`sticky top-0 flex pt-3 items-center flex-col bg-white z-50 px-4`}
        >
          <div className="flex items-center justify-between w-full">
            <h5
              className={`text-2xl font-bold text-gray-500 w-full text-center`}
            >
              {title}
            </h5>
            <Button
              iconOnly
              onClick={() => {
                setOpacity(false)
                setTimeout(() => {
                  handleClose()
                }, 400)
              }}
            >
              <Icon name="cross" />
            </Button>
          </div>
          <Division />
        </header>
        <section className={`"pt-5 flex justify-center items-center px-4`}>
          {children}
        </section>
        <footer className={`flex justify-center pt-2 space-x-14`}></footer>
      </div>
    </div>
  )
}
