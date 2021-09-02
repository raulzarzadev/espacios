import EspacioCard from '@comps/Cards/EspacioCard'
import Division from '@comps/Division'
import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'
import Modal from '@comps/modals'
import router from 'next/router'

export default function Espacios() {
  return (
    <div className="relative grid gap-2 sm:p-4 max-w-lg mx-auto  ">
      <div className=" sticky bg-white-light  z-10 left-0 right-0 top-0">
        <div className=" flex justify-between items-center px-1 pt-1">
          <h3 className="font-bold text-2xl text-center w-full ">Espacios</h3>
          <div className="min-w-[7rem]">
            <Button
              label="Agregar"
              size="sm"
              fullWidth
              onClick={() => router.push('/espacios/new')}
            ></Button>
          </div>
        </div>
        <Division />
        <div className="max-w-sm mx-auto my-4 flex items-center px-1 justify-center">
          <Text placeholder="Buscar" />
          <div className="ml-2">
            <Modal
              OpenComponent={Icon}
              openProps={{ name: 'filter' }}
              title="Filtrar espacios"
            >
              Filtrar
            </Modal>
          </div>
        </div>
      </div>
      <div className="">
        <Link href={`/espacios/casa-123`}>
          <EspacioCard />
        </Link>
      </div>
      <div className="">
        <EspacioCard />
      </div>
      <div className="">
        <EspacioCard />
      </div>
      <div className="">
        <EspacioCard />
      </div>
      <div className="">
        <EspacioCard />
      </div>
      <div className="">
        <EspacioCard />
      </div>
    </div>
  )
}
