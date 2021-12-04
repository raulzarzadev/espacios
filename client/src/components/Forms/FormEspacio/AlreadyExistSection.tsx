import { espacioType } from '@comps/Cards/EspacioCard'
import DaysPicker from '@comps/inputs/DaysPicker'
import AreasSection from './AreasSection'
import DeleteEspacioModal from './DeleteEspacioModal'
import FormSection from './FormSection'
import InventorySection from './InventorySection'
import InventoryAdminView from './InventoryViews/InventoryAdminView'
import InventoryFastView from './InventoryViews/InventoryNewInventoryView.js'

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
        <DaysPicker
          defaultDays={espacio?.trashDays}
          handleChange={handleChange}
        />
      </FormSection>
      <FormSection title="Areas" id="areas">
        <AreasSection
          espacio={espacio}
          areas={espacio?.areas}
          setAreas={(areas: any) => handleChange('areas', areas)}
        />
      </FormSection>
      <FormSection title="Existencias" id="inventory">
        <InventoryAdminView espacio={espacio} />
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
