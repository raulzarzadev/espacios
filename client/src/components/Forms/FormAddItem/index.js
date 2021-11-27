import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Modal from '@comps/modals'
import { useRouter } from 'next/router'
export default function FormAddItem({
  selectables = [],
  selected = [],
  setSelected = () => {},
  options = {
    modalTitle: 'Agregar',
    modalOpenLabel: 'Agregar',
    addNewRoute: '/'
  }
}) {
  const router = useRouter()
  const {
    modalTitle = 'Agregar',
    modalOpenLabel = 'Agregar',
    addNewRoute = '/'
  } = options
  const handleAddItem = (item) => {
    let res = []
    const itemRemoved = selected.filter(({ id }) => item.id === id)
    const itemsClean = selected.filter(({ id }) => item.id !== id)
    if (itemRemoved.length === 0) {
      res = [...selected, item]
    } else {
      res = [...itemsClean]
    }
    setSelected(res)
  }
  const sortByName = (a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }
  const handleSetQuantity = (itemId, quantity) => {
    const oldItem = selected.find(({ id }) => id === itemId)
    const itemsFiltered = selected.filter(({ id }) => id !== itemId)
    let res = { ...oldItem, quantity }
    if (parseInt(quantity) == 0) {
      setSelected([...itemsFiltered])
    } else {
      setSelected([...itemsFiltered, res])
    }
  }
  return (
    <div className="">
      <div className="grid-flow-col">
        {selected.sort(sortByName).map((item) => (
          <div key={item.id} className="my-2">
            <label className='flex w-full justify-between px-4'>
              <div>{item.name}</div>
              <Counter
                value={item?.quantity}
                onChange={({ target: { value } }) =>
                  handleSetQuantity(item.id, value)
                }
              />
            </label>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center my-4">
        <Modal
          title={modalTitle}
          OpenComponent={Button}
          openProps={{ label: modalOpenLabel, variant: 'outlined' }}
        >
          <div className="flex flex-col justify-center items-center">
            <div>Todas las areas</div>
            <div>
              {selectables?.map((item, i) => (
                <div key={item?.id}>
                  {item?.name}
                  <input
                    type="checkbox"
                    checked={!!selected?.find(({ id }) => id === item?.id)}
                    onChange={() => handleAddItem({ ...item, quantity: 1 })}
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-flow-col gap-5 pt-5">
              <Button
                size="sm"
                label="Nuevo"
                variant="outlined"
                onClick={() => router.push(addNewRoute)}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
