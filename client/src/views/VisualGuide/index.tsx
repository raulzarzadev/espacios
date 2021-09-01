import Alert from '@comps/Alert'
import AdminCard from '@comps/Cards/AdminCard'
import EspacioCard from '@comps/Cards/EspacioCard'
import ServicioCard from '@comps/Cards/ServicioCard'
import Chip from '@comps/Chip'
import FormEspacio from '@comps/Forms/FormEspacio'
import Icon from '@comps/Icon'
import Button from '@comps/inputs/Button'
import Counter from '@comps/inputs/Coun}ter'
import Select from '@comps/inputs/Select'
import Text from '@comps/inputs/Text'
import TextArea from '@comps/inputs/TextArea'
import Link from '@comps/Link'
import Signin from '@comps/Login/signin'
import Signup from '@comps/Login/signup'
import Modal from '@comps/modals'

import { AiOutlineSave } from '@react-icons/all-files/ai/AiOutlineSave'

export default function VisualGuide() {
  return (
    <div className="">
      <section>
        <div className="text-2xl">Colors</div>
        <div className="flex flex-wrap justify-center">
          <div className="text-xs w-12 text-center">
            primary
            <div className="h-16 w-10 m-1  bg-prim"></div>
            <div className={`h-16 w-10 m-1   bg-prim-light`}></div>
            <div className={`h-16 w-10 m-1   bg-prim-dark`}></div>
          </div>
          <div className="text-xs w-12 text-center">
            second
            <div className="h-16 w-10 m-1  bg-secon"></div>
            <div className={`h-16 w-10 m-1   bg-secon-light`}></div>
            <div className={`h-16 w-10 m-1   bg-secon-dark`}></div>
          </div>
          <div className="text-xs w-12 text-center">
            third
            <div className="h-16 w-10 m-1  bg-third"></div>
            <div className={`h-16 w-10 m-1   bg-third-light`}></div>
            <div className={`h-16 w-10 m-1   bg-third-dark`}></div>
          </div>
          <div className="text-xs w-12 text-center">
            black
            <div className="h-16 w-10 m-1  bg-black"></div>
            <div className={`h-16 w-10 m-1   bg-black-light`}></div>
            <div className={`h-16 w-10 m-1   bg-black-dark`}></div>
          </div>
          <div className="text-xs w-12 text-center">
            white
            <div className="h-16 w-10 m-1  bg-white"></div>
            <div className={`h-16 w-10 m-1   bg-white-light`}></div>
            <div className={`h-16 w-10 m-1   bg-white-dark`}></div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-2xl">Components</div>
        <section>
          <div className="text-lg font-bold text-center">Chips</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <Chip
                label="really large text for this chip"
                size="sm"
                color="secondary"
              />
              <Chip label="primary " size="sm" color="primary" />
              <Chip
                label="third color & full width"
                size="sm"
                color="third"
                fullWidth
              />
              <Alert variant="danger" />
              <Alert variant="warning" />
              <Alert variant="info" />
              <Alert variant="success" />
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg font-bold text-center">Inputs</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <Text label="Input text" variant="primary" />
              <Select
                variant="primary"
                label="Input select"
                options={[
                  { label: 'Opcion 1', id: '1' },
                  { label: 'Opcion 2', id: '2' },
                  { label: 'Opcion 3', id: '3' }
                ]}
                fullWidth
              />
              <TextArea label="Text Area" fullWidth />
              <Button
                label={'Button super large full width'}
                fullWidth
                size="lg"
              />
              <Button label="Button" variant="secondary" size="sm" />
              <Button
                label="Button"
                iconOnly
                variant="third"
                size="md"
                icon={<Icon name="save" size="md" />}
              />
              <Button
                label="Button"
                variant="outlined"
                size="sm"
                icon={<Icon name="save" />}
              />
              <Link href="/">plain link</Link>
              <Counter />
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg font-bold text-center">Cards</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <AdminCard />
              <EspacioCard />
              <ServicioCard />
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg font-bold text-center">Modals</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <Modal
                OpenComponent={Button}
                openProps={{ label: 'Abir Modal' }}
                title="Modal title"
                onCancel={() => console.log('cancel')}
                cancelButton
                continueButton
                onContinue={() => console.log('Continue')}
              >
                <div>Modal</div>
              </Modal>
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg font-bold text-center">Views</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <Signin />
              <Signup />
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg font-bold text-center">Forms</div>
          <div className="flex flex-wrap justify-center">
            <div className="grid gap-2 ">
              <FormEspacio />
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
