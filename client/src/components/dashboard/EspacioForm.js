import Button from '@comps/Button'
import InputText from '@comps/Inputs/Text'
import Input from '@comps/InputText'
import Link from '@comps/Link'
import Icon from '@material-tailwind/react/Icon'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import SelectWeekDays from './SelectWeekDays'
const SUB_ESPACIOS = [
  {
    id: '1',
    value: '1',
    label: 'Cocina Ch',
    icon: 'home',
    items: ['1', '2', '3'],
    description: 'Descripción de cuarto ',
    category: ['kitchen']
  },
  /*  {
    id: '2',
    value: '2',
    label: 'Cuarto Ind',
    icon: 'room',
    items: ['4', '6', '7', '9'],
    description: 'Descripción de cuarto ',
    category: ['room']
  }, */
  {
    id: '3',
    value: '3',
    label: 'Baño Completo',
    icon: 'kitchen',
    items: ['14', '12', '5', '19', '10'],
    description: 'Descripción label',
    category: ['room']
  }
]
const ITEMS = [
  {
    id: '1',
    value: '1',
    label: 'estufa',
    category: ['mobile'],
    description: 'descripcion de estufa',
    icon: null
  },
  {
    id: '2',
    value: '2',
    label: 'cuchara',
    category: ['consumible'],
    description: 'descripcion de cuchara',
    icon: null
  },
  {
    id: '3',
    value: '3',
    label: 'jabon de trastes',
    category: ['consumible'],
    description: 'descripcion del jabon de trastes',
    icon: null
  },
  {
    id: '14',
    value: '14',
    label: 'shapoo de cuerpo',
    category: ['consumible'],
    description: 'descripcion del shampo',
    icon: null
  },
  {
    id: '12',
    value: '12',
    label: 'papel sanitario',
    category: ['consumible'],
    description: 'descripcion del papel',
    icon: null
  },
  {
    id: '5',
    value: '5',
    label: 'toalla de manos',
    category: ['linens'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '19',
    value: '19',
    label: 'Espejo',
    category: ['mobil'],
    description: 'descripcion del toalla de manos',
    icon: null
  },
  {
    id: '10',
    value: '10',
    label: 'Tapete',
    category: ['linens'],
    description: 'descripcion del toalla de manos',
    icon: null
  }
]

export default function EspacioForm({
  espacio = null,
  title = 'Nuevo Espacio',
  handleChange
}) {
  const [subEspacioSelected, setSubEspacioSelected] = useState('')
  const [subEspacios, setSubEspacios] = useState([])
  const handleSelectSubEspacio = ({ target: { value } }) => {
    setSubEspacioSelected(value)
  }

  const [form, setForm] = useState({})

  useEffect(() => {
    if (espacio) {
      setSubEspacios(espacio.subEspacios)
      setForm(espacio)
    }
  }, [espacio])

  const addSubEspacio = () => {
    const newSubEspacio = SUB_ESPACIOS.find(
      ({ value }) => value === subEspacioSelected
    )
    if (!newSubEspacio) return
    setSubEspacios([...subEspacios, newSubEspacio])
    setSubEspacioSelected('')
  }
  const router = useRouter()
  useEffect(() => {
    if (subEspacioSelected === 'new_sub_espacio')
      router.push('/dashboard/sub-espacios/new')
  }, [subEspacioSelected])

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
        <Section title="Ubicación" indent="1">
          <div>Ubicacion</div>
        </Section>
        <Section title="Basura" indent="1">
          <SelectWeekDays />
        </Section>
      </Section>

      <Section title="Contratos" sectionTitle></Section>
      <Section title="Servicios" sectionTitle></Section>
      <Section title="Sub-espacios" sectionTitle>
        <div className="text-center flex flex-wrap my-4">
          {subEspacios.map(({ label, value }, i) => (
            <div className="w-1/2 p-2 " key={`${value}-${i}`}>
              <div className="">{label}</div>
            </div>
          ))}
        </div>
        <div className="mx-3 flex justify-center md:block flex-wrap md:flex-nowrap">
          <div className="w-full my-2 ">
            <select
              className="w-full py-2"
              value={subEspacioSelected}
              onChange={handleSelectSubEspacio}
            >
              <option value="">selecciona sub espacio</option>
              {SUB_ESPACIOS.map(({ label, value }, i) => (
                <option key={`${value}-${i}`} value={value}>
                  {label}
                </option>
              ))}
              <option value="new_sub_espacio">nuevo</option>
            </select>
          </div>
          <div className="w-full my-2 ">
            <Button block onClick={addSubEspacio}>
              <Icon name="add" size="2x" />
            </Button>
          </div>
        </div>
      </Section>
      <Section title="Inventario" sectionTitle>
        <div className="flex flex-col">
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
        </div>
      </Section>
    </div>
  )
}

const Section = ({
  title = 'title',
  sectionTitle = false,
  children,
  indent,
  className
}) => {
  const [open, setOpen] = useState(false)
  const handleSetOpen = (status) => {
    setOpen(status)
  }
  return (
    <div className={`my-2 ${indent==='1' && `pl-6`}`}>
      <div className="w-full ">
        <div className="w-full ">
          <div className="font-bold flex ">
            {open ? (
              <button
                iconOnly
                size="sm"
                onClick={() => handleSetOpen(false)}
                className={
                  sectionTitle &&
                  `text-2xl font-semibold flex justify-center items-center`
                }
              >
                {title}{' '}
                <Icon name="keyboard_arrow_down" size={sectionTitle && '2xl'} />
              </button>
            ) : (
              <button
                iconOnly
                size="sm"
                className={
                  sectionTitle &&
                  `text-2xl font-semibold flex justify-center items-center`
                }
                onClick={() => handleSetOpen(true)}
              >
                {title}{' '}
                <Icon
                  name="keyboard_arrow_right"
                  size={sectionTitle && '2xl'}
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
