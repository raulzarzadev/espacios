import AddSquare from '@comps/AddSquare'
import { espacioType } from '@comps/Cards/EspacioCard'
import ServicioCard from '@comps/Cards/ServicioCard'
import Division from '@comps/Division'
import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'
import Modal from '@comps/modals'
import Image from 'next/image'
import router from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import { testImage } from 'src/assets/images'
import ContractsSection from './ContractsSection'
import ImagesSection from './ImagesSection'

export default function FormEspacio({
  formTitle = 'espacios form',
  alreadyExist,
  espacio
}: espacioForm) {
  const [form, setForm] = useState<espacioType>({
    contracts: [],
    images: [],
    title: '',
    id: '',
    address: ''
  })
  useEffect(() => {
    if (espacio) {
      setForm(espacio)
    }
  }, [espacio])

  console.log(espacio)

  const { contracts, images } = form
  return (
    <div className="w-full max-w-full ">
      <section className="sticky top-0 left-0 right-0 bg-white-light z-10  ">
        <div className="flex w-full p-2 pb-0 items-center">
          <h3 className="flex w-full text-3xl">{formTitle}</h3>
          <div>
            <Button
              label={alreadyExist ? 'Actualizar ' : 'Guardar'}
              size="sm"
            />
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <Division />
        </div>
        {/* -----form navigation ----- */}
        <div className="flex overflow-auto  max-w-[90vw] py-2 mx-auto">
          <div className="mx-2 my-1">
            <Link href="#">Espacio</Link>
          </div>
          <div className="mx-2 my-1">
            <Link href="#services">Servicio</Link>
          </div>
          <div className="mx-2 my-1">
            <Link href="#areas">Areas</Link>
          </div>
          <div className="mx-2 my-1">
            <Link href="#contract">Contratos</Link>
          </div>
        </div>
      </section>
      {/* -----Form------  */}
      <section className="grid p-4 pt-0 gap-2 ">
        {/* -----form images ----- */}
        <ImagesSection />

        {/* -----form espacios ----- */}
        <section id="espacios" className="flex w-full">
          <div className="grid gap-3 justify-center w-full">
            <h3 className="font-bold">Espacio</h3>
            <Text placeholder="Espacio" />
            <Text placeholder="Dirección" />
            <Text placeholder="Anuncio (Link)" />
            <Text placeholder="Clave de entrada" />
            <label className="flex mx-auto">
              <span className="mr-2">Huespedes</span>
              <Counter />
            </label>
            <div>
              <h4>Ubicación</h4>
              <div className="h-16 w-full bg-white-dark"></div>
            </div>
            <Text placeholder="Tipo de espacio" />
            <Text placeholder="Tipo de alojamiento" />
            <Text placeholder="Tipo de propiedad" />
          </div>
        </section>
        {/* -----form Servicios ----- */}
        <section id="services" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Servicios</h3>
            <ServicioCard />
            <div className="flex w-full justify-center my-4">
              <Button
                label="Agregar Servicio"
                onClick={() =>
                  router.push(`/services/new?espacioId=${form.id}`)
                }
              />
            </div>
          </div>
        </section>
        <section id="areas" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Areas</h3>
            <div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Baño
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  1/2 Baño
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Cocina
                  <Counter />
                </label>
              </div>
              <div className="my-2">
                <label className="flex w-full justify-between">
                  Habitaciones
                  <Counter />
                </label>
              </div>
              <div className="flex w-full justify-center my-4">
                <Modal
                  title="Agregar area"
                  OpenComponent={Button}
                  openProps={{ label: 'Agregar area', variant: 'outlined' }}
                  onContinue={() => console.log('guardar')}
                  continueButton="Agregar"
                >
                  Nueva area
                </Modal>
              </div>
            </div>
          </div>
        </section>
        <section id="contract" className="flex w-full">
          <div className="w-full">
            <h3 className="font-bold">Contratos</h3>
            <ContractsSection contracts={contracts} />
          </div>
        </section>
      </section>
    </div>
  )
}

interface espacioForm {
  formTitle: string
  alreadyExist?: boolean
  espacio?: espacioType | null
}
