import Button from '@comps/inputs/Button'
import Modal from '@comps/modals'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState,  } from 'react'
export default function DeleteEspacioModal({ espacio }: { espacio: any }) {
  const [open, setOpen] = useState(false)
  const handleOpenDelete = () => {
    setOpen(!open)
  }
  const router = useRouter()
  const handleDelete = () => {
    axios
      .delete(`/api/espacios/${espacio.id}`)
      .then((res) => {
        setTimeout(() => {
          router.replace('/espacios')
        }, 300)
      })
      .catch((err) => console.log(`err`, err))
    console.log(`espacio`, espacio)
  }
  return (
    <div>
      <Modal
        OpenComponent={Button}
        openProps={{
          fullWidth: true,
          label: 'Eliminar',
          variant: 'secondary',
          type: 'button',
          onClick: { handleOpenDelete }
        }}
        title="Eliminar espacio"
        onContinue={handleDelete}
        continueButton="Eliminar"
        cancelButton="Cancelar"
        continueButtonVariant="secondary"
      >
        <div>Eliminar este espacio</div>
      </Modal>
    </div>
  )
}
