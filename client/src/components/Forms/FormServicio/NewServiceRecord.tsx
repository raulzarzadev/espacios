import AddSquare from "@comps/AddSquare"
import Modal from "@comps/modals"
import FormServiceRecord from "./FormServiceRecord"

const NewServiceRecord = ({ record }: { record?: Object }) => {
  return (
    <Modal
      OpenComponent={AddSquare}
      openProps={{ size: 'lg' }}
      title="Nueva entrada"
    >
      <FormServiceRecord />
    </Modal>
  )
}

export default NewServiceRecord
