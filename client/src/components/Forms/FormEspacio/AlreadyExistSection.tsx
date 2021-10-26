import { espacioType } from '@comps/Cards/EspacioCard'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Counter'
import DaysPicker from '@comps/inputs/DaysPicker'
import Modal from '@comps/modals'
import DeleteEspacioModal from './DeleteEspacioModal'
import FormSection from './FormSection'
import LocationSection from './LocationSection'

export default function AlreadyExistSection({
  espacio,
  handleChange
}: {
  espacio?: espacioType
  handleChange?: (field: string, value: any) => void
}) {
  return (
    <div>
      <FormSection title="Dias de basura" id="basura">
        <DaysPicker espacioId={espacio?.id} defaultDays={espacio?.trashDays} handleChange={handleChange} />
      </FormSection>
      <FormSection title="Ubicacion" id="location">
        <div></div>
        {/* <LocationSection /> */}
      </FormSection>
      <FormSection title="Servicios" id="services">
        {/*   <div className="w-full">
            <h3 className="font-bold">Servicios</h3>
            {form?.services?.map((id) => (
              <ServiceCard key={id} service={{ id }} />
            ))}
            <div className="flex w-full justify-center my-4">
              <Button
                type="button"
                label="Agregar Servicio"
                onClick={() =>
                  router.push(
                    `/services/new${form?.id && `?espacio=${form.id}`}`
                  )
                }
              />
            </div>
          </div> */}
      </FormSection>
      {/* -----form Servicios ----- */}
      <FormSection title="Areas" id="areas">
        {' '}
        {/*    <div className="w-full">
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
        </div> */}
      </FormSection>
      <FormSection title="Contratos" id="contracts">
        {' '}
        {/* <ContractsSection contracts={contracts} /> */}
      </FormSection>
      <FormSection title="Configuración" id="configuration">
        <DeleteEspacioModal espacio={espacio} />
      </FormSection>
    </div>
  )
}
