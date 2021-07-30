import { useState } from 'react'
import MTModal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'

export default function Modal({
  children,
  handleClose,
  handleAccept,
  acceptLabel = 'aceptar',
  closeLabel = 'cerrar',
  title = 'Title',
  open = false,
  handleOpen
}) {
  const [showModal, setShowModal] = useState(open)
  useState(() => {}, [open])
  return (
    <>
      <MTModal
        size="regular"
        active={open}
        toggler={() => {
          setShowModal(false)
          handleOpen()
        }}
      >
        <ModalHeader
          toggler={() => {
            setShowModal(false)
            handleOpen()
          }}
        >
          {title}
        </ModalHeader>
        <ModalBody>
          <div className="w-64 sm:w-96">{children}</div>
        </ModalBody>
        <ModalFooter>
          {handleClose && (
            <Button
              color="red"
              buttonType="link"
              onClick={(e) => {
                setShowModal(false)
                handleOpen()
              }}
              ripple="dark"
            >
              {closeLabel}
            </Button>
          )}
          {handleAccept && (
            <Button
              color="green"
              onClick={(e) => {
                setShowModal(false)
                handleAccept()
                handleOpen()
              }}
              ripple="light"
            >
              {acceptLabel}
            </Button>
          )}
        </ModalFooter>
      </MTModal>
    </>
  )
}
