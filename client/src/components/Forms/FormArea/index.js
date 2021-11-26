import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Text from '@comps/inputs/Text'
import Button from '@comps/inputs/Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ROUTES from 'src/CONSTANTS/ROUTES'
import FormTitleAndButton from '@comps/FormTitleAndButton'
import { getAdminItems } from '@fb/items'
import { useSelector } from 'react-redux'
import Counter from '@comps/inputs/Counter2'
import { createArea } from '@fb/areas'
const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required()
})

export default function FormArea({ area = {} }) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isDirty, isSubmitting, isSubmitSuccessful },
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: area
  })
  const router = useRouter()
  const { user } = useSelector((state) => state.user)
  useEffect(() => {
    if (user) {
      getAdminItems(user?.id, setItems)
    }
  }, [user])
  const [items, setItems] = useState([])
  const onSubmit = (data) => {
    console.log(`data`, data)
    createArea(user?.id, data)
      .then((res) => console.log(`res`, res))
      .catch((err) => console.log(`err`, err))
  }


  const [itemsForm, setItemsForm] = useState([])

  const handleAddItem = (item) => {
    let res = []
    const itemRemoved = itemsForm.filter(({ id }) => item.id === id)
    const itemsClean = itemsForm.filter(({ id }) => item.id !== id)
    if (itemRemoved.length === 0) {
      res = [...itemsForm, item]
    } else {
      res = [...itemsClean]
    }
    setItemsForm(res)
    setValue('items',[...res])
  }
  const handleSetQuantity = (itemId, quantity) => {
    const oldItem = itemsForm.find(({ id }) => id === itemId)
    const itemsFiltered = itemsForm.filter(({ id }) => id !== itemId)
    let res = { ...oldItem, quantity }
    if (parseInt(quantity) == 0) {
      setItemsForm([...itemsFiltered])
      setValue('items', [...itemsFiltered])
    } else {
      setItemsForm([...itemsFiltered, res])
      setValue('items', [...itemsFiltered, res])
    }
  }
  const alreadyExist = false
  const sortByName = (a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
  }
  console.log(`watch()`, watch())
  return (
    <div className="max-w-2xl mx-auto grid grid-flow-row justify-items-center py-6">
      <FormTitleAndButton
        disabled={!isDirty}
        title={`${alreadyExist ? item?.name : 'Nueva area'}`}
        label={isSubmitSuccessful ? 'Gardado' : 'Guardar'}
        onClick={handleSubmit(onSubmit)}
        loading={isSubmitting}
      />
      <Text
        label="Nombre del area"
        placeholder="Nombre"
        {...register('name')}
      />
      <Text
        label="Descripción"
        placeholder="Descripción (opcional)"
        {...register('description')}
      />

      <div className="my-4">
        <h3 className="text-2xl font-bold ">
          Items <span className="font-thin text-sm italic">sugeridos</span>{' '}
        </h3>
      </div>
      <div className="flex flex-wrap max-w-lg  ">
        {itemsForm?.sort(sortByName).map((item) => (
          <div
            key={item.id}
            className="flex w-full justify-between items-center"
          >
            <div className="mx-4">{item.name}</div>
            <Counter
              value={item.quantity}
              onChange={({ target: { value } }) =>
                handleSetQuantity(item.id, value)
              }
            />
          </div>
        ))}
      </div>
      <div className="my-4">
        <h3 className="text-2xl font-bold ">
          Items <span className="font-thin text-sm italic">todos</span>{' '}
        </h3>
      </div>
      <div>
        {items?.map((item, i) => (
          <div key={item.id}>
            {item.name}
            <input
              type="checkbox"
              checked={!!itemsForm?.find(({ id }) => id === item.id)}
              onChange={() => handleAddItem({ ...item, quantity: 1 })}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-flow-col gap-4 p-4">
        <Button
          label="Nuevo item"
          variant="outlined"
          onClick={() => router.push(ROUTES.items.new())}
        />
      </div>
    </div>
  )
}
