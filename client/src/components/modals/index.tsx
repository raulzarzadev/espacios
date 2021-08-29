import Icon from '@comps/Icon'
import { ReactNode, useState } from 'react'
import Button from '@comps/inputs/Button'
import Division from '@comps/Division'
export default function Modal({
  OpenComponent,
  openProps,
  title = 'Modal title',
  children,
  continueButton,
  cancelButton,
  onContinue,
  onCancel
}: Modal) {
  const [open, setOpen] = useState(false)
  const [opacity, setOpacity] = useState(false)
  const handleOpen = () => {
    console.log('ora', open)
    setOpen(true)
    setTimeout(() => {
      setOpacity(true)
    }, 150)
  }
  const handleClose = () => {
    setOpacity(false)
    setTimeout(() => {
      setOpen(false)
    }, 500)
  }

  return (
    <div className="">
      <div>
        {<OpenComponent {...openProps} onClick={handleOpen}></OpenComponent>}
      </div>
      <div>
        <div
          className={` w-full inset-0 z-50 overflow-hidden flex justify-center items-center 
          transition-opacity
          duration-500
          ${opacity ? 'opacity-100' : 'opacity-0'}
          ${open ? 'fixed' : 'hidden'}
          `}
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        >
          <div className="border border-blue-500  bg-white w-full sm:w-6/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
            <div className=" py-4 text-left px-6">
              {/* 	<!--Title--> */}
              <div className="flex items-center ">
                <button className=" cursor-pointer z-50" onClick={handleClose}>
                  <Icon name="cross" />
                </button>
                <p className="text-2xl font-bold text-gray-500 w-full text-center">
                  {title}
                </p>
              </div>

              <Division />
              {/* 	<!--Body--> */}
              <div className="my-5 mr-5 ml-5 flex justify-center">
                {children}
              </div>
              {/* 	<!--Footer--> */}
              <div className="flex justify-center pt-2 space-x-14">
                {cancelButton && (
                  <Button
                    label="Cancelar"
                    variant="outlined"
                    onClick={() => {
                      onCancel()
                      handleClose()
                    }}
                  />
                )}
                {continueButton && (
                  <Button
                    //className="px-4 bg-blue-500 p-3 ml-3 rounded-lg  hover:bg-teal-400"
                    label="Continuar"
                    onClick={() => {
                      onContinue()
                      handleClose()
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Modal {
  OpenComponent: any
  openProps: object
  children: ReactNode
  title: string
  continueButton: boolean
  cancelButton: boolean
  onContinue: any
  onCancel: any
}
