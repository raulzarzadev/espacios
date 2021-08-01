import Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputText'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import SelectWeekDays from './SelectWeekDays'
import Modal from '@comps/Modal'
import SectionSubEspacios from './SectionSubEspacio'
import SectionServices from './SectionServices'
import SectionContracts from './SectionContracts'

export default function EspacioForm({
  espacio = null,
  title = 'Nuevo Espacio',
  handleChange
}) {
  const [form, setForm] = useState({})

  useEffect(() => {
    if (espacio) {
      setForm(espacio)
    }
  }, [espacio])

  const handleSetSubEspacios = (newSubEspaciosList) => {
    console.log('newSubEspaciosList', newSubEspaciosList)
    setForm({ ...form, subEspacios: newSubEspaciosList })
  }

  return (
    <div className=" bg-white m-1 sm:m-4  flex flex-col gap-4 p-4 rounded-md ">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <div className=" max-w-max mx-auto">
        <InputText value={form?.title} name="title" placeholder="Titulo" />
      </div>
      <div className=" mx-auto  max-w-max ">
        <InputText
          value={form?.subtitle}
          name="subtitle"
          placeholder="Sub titulo"
        />
      </div>
      <div className=" mx-auto  max-w-max ">
        <InputText
          value={form?.maxOccupants}
          name="maxOccupants"
          placeholder="Ocupantes Max"
        />
      </div>
      <Section title="General" sectionTitle={true}>
        <Section title="Dirección" indent="1">
          <div className="flex flex-wrap">
            <div className="p-2 w-full sm:w-1/2">
              <InputText placeholder="Calle" />
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <InputText placeholder="Numero" />
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <InputText placeholder="Colonia" />
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <InputText placeholder="Entre Calles" />
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <InputText placeholder="CP" />
            </div>
          </div>
        </Section>
        <Section title="Ubicación" indent="1"></Section>
        <Section title="Dias de basura" indent="1">
          <SelectWeekDays />
        </Section>
      </Section>

      <Section title="Contratos" sectionTitle>
        <SectionContracts
          list={[
            {
              files: [
                'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              ],
              title: 'label',
              description: 'Nuevo contrato firmado con el dueño del lugar'
            }
          ]}
        />
      </Section>
      <Section title="Servicios" sectionTitle>
        <Section title="Historial" indent="1">
          <Section title="Agua" indent="1">
            <ItemCard addCard />
          </Section>
          <Section title="Gas" indent="1">
            <ItemCard addCard />
          </Section>
          <Section title="Luz" indent="1">
            <ItemCard addCard />
          </Section>
          <Section title="Internet" indent="1">
            <ItemCard addCard />
          </Section>
          <Section title="Mantenimiento" indent="1">
            <ItemCard addCard />
          </Section>
        </Section>
        <Section title="Contratos" indent="1">
          <SectionServices />
        </Section>
        {/* <div className="flex">
          <div className="m-1">
            <ItemCard addCard />
          </div>
          <div className="m-1">
            <ItemCard
              item={{
                files: [
                  'https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdW1lbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                ],
                title: 'Contrato 2021',
                description: 'Nuevo contrato firmado con el dueño del lugar'
              }}
            />
          </div>
        </div> */}
      </Section>
      <Section title="Sub-espacios" sectionTitle>
        <SectionSubEspacios
          subEspacios={form.subEspacios}
          setSubEspacios={handleSetSubEspacios}
        />
      </Section>
      <Section title="Inventario" sectionTitle>
        {/* <div className="flex flex-col">
          {subEspacios.map(({ items, label }, i) => (
            <div className="" key={i}>
              <div className="font-bold">{label}</div>
              <div className="flex items-center flex-wrap">
                {items.map((item) => (
                  <div key={item} className="flex items-center">
                    <input type="checkbox" />
                    {ITEMS.find(({ id }) => id === item)?.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </Section>
    </div>
  )
}

const Section = ({
  title = 'title',
  sectionTitle = false,
  children,
  indent
}) => {
  const [open, setOpen] = useState(false)
  const handleSetOpen = (status) => {
    setOpen(status)
  }
  return (
    <div className={`my-2 ${indent === '1' && `pl-6`}`}>
      <div className="w-full ">
        <div className="w-full ">
          <div className="font-bold flex ">
            {open ? (
              <button
                onClick={() => handleSetOpen(false)}
                className={
                  sectionTitle ?
                  `text-2xl font-semibold flex justify-center items-center`:undefined
                }
              >
                {title}{' '}
                <Icon
                  name="keyboard_arrow_down"
                  size={sectionTitle ? '2xl' : ''}
                />
              </button>
            ) : (
              <button
                className={
                  sectionTitle ?
                  `text-2xl font-semibold flex justify-center items-center`:undefined
                }
                onClick={() => handleSetOpen(true)}
              >
                {title}{' '}
                <Icon
                  name="keyboard_arrow_right"
                  size={sectionTitle ? '2xl' : ''}
                />
              </button>
            )}
          </div>
          <div
            className={`opacity-0 transition duration-700 ease-in-out ${
              open && `opacity-100`
            }`}
          >
            {open && <div>{children}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
