import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter2'
import Modal from '@comps/Modal'
import { useState } from 'react'
import FormArea from '../FormArea4'
export default function AreasSection({ areas = [], setAreas, espacio }) {
  const handleAddArea = (
    newArea,
    options = { alreadyExist: false, id: null }
  ) => {
    setOpenNewArea(false)
    const areasCleaned = areas.filter(({ id }) => id !== options.id)
    setAreas([...areasCleaned, { ...newArea, quantity: 1 }])
  }
  const handleSetQuantity = (index, quantity) => {
    const oldItem = areas[index]
    areas?.splice(index, 1)
    let res = { ...oldItem, quantity }
    if (parseInt(quantity) == 0) {
      setAreas([...areas])
    } else {
      setAreas([...areas, res])
    }
  }

  const sortAreas = (a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }
  const handleRemoveArea = (areaId) => {
    const areasCleaned = areas.filter(({ id }) => id !== areaId)
    setAreas(areasCleaned)
  }

  const [openNewArea, setOpenNewArea] = useState(false)

  return (
    <div className="w-full">
      <div>
        {areas?.sort(sortAreas).map((area, i) => (
          <AreaRow
            area={area}
            key={i}
            index={i}
            espacio={espacio}
            handleSetQuantity={handleSetQuantity}
            handleAddArea={handleAddArea}
            handleRemoveArea={handleRemoveArea}
          />
        ))}
      </div>
      <div className="text-center">
        <Button onClick={() => setOpenNewArea(true)} label="Agregar area" />
        <Modal open={openNewArea} handleClose={() => setOpenNewArea(false)}>
          <FormArea espacio={espacio} handleAddArea={handleAddArea} />
        </Modal>
      </div>
    </div>
  )
}

const AreaRow = ({
  area,
  index,
  espacio,
  handleSetQuantity,
  handleAddArea,
  handleRemoveArea
}) => {
  const [openEditArea, setOpenEditArea] = useState(false)
  const handleOpenEditArea = () => {
    setOpenEditArea(!openEditArea)
  }
  return (
    <div className="flex justify-between w-full items-center my-1">
      <div className=" flex items-center pr-2">
        {/* <Button
          size="xs"
          variant="secondary"
          onClick={() => handleRemoveArea(area.id)}
          iconOnly
          icon={<Icon name="minus" />}
        /> */}
      </div>
      <div className="w-3/4 truncate">{area?.name}</div>
      <div className="">
        <Counter
          value={area?.quantity}
          onChange={({ target: { value } }) => {
            handleSetQuantity(index, value)
          }}
        />
      </div>
      <div className="flex items-center">
        <button className='mx-1 text-danger' onClick={() => handleRemoveArea(area.id)}>
          <Icon name="trash" />
        </button>
        <button className='mx-1 text-info-dark' id={area.name} onClick={handleOpenEditArea}>
          <Icon name="edit" />
        </button>
        {/* <Button
          onClick={handleOpenEditArea}
          size="xs"
          variant="third"
          iconOnly
          id={area.name}
          icon={
            <div className="flex px-2">
              <Icon name="edit" />
            </div>
          }
        /> */}
        {openEditArea && (
          <Modal
            title="Editar area"
            open={openEditArea}
            handleClose={setOpenEditArea}
          >
            <FormArea
              espacio={espacio}
              area={area}
              handleAddArea={(newArea, options) => {
                handleAddArea(newArea, options)
                setOpenEditArea(false)
              }}
            />
          </Modal>
        )}
      </div>
    </div>
  )
}
