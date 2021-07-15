import Button from '@comps/Button'
import HomeView from '@comps/HomeView'
import InputSelect from '@comps/InputSelect'
import InputText from '@comps/InputText'
import Layaut from '@comps/Layout'
import Link from '@comps/Link'

export default function VisualGideView() {
  const components = [
    { label: 'Nextjs link', component: <Link /> },
    {
      label: 'Icon Button',
      component: <Button Icon="lock_open" label="Close" />
    },
    { label: 'Simple Button ', component: <Button> Button </Button> },
    { label: 'Input Text', component: <InputText Icon="person" /> },
    {
      label: 'Input Select',
      component: (
        <InputSelect
          options={[
            { label: 'Uno', value: '1' },
            { label: 'Dos', value: '2' }
          ]}
        />
      )
    },
    /*  { label: 'Main Layout ', component: <Layaut /> }, */
    { label: 'Home View link', component: <HomeView /> }
  ]
  // comentario para nuevo commit 
  return (
    <div className="">
      <div className="flex flex-wrap bg-gray-100">
        {components.map(({ label, component }) => (
          <div
            key={label}
            className="relative w-full  sm:w-1/2 box-border p-2 pb-6"
          >
            <div className=" bg-white flex justify-center p-2 items-center h-16 min-h-full ">
              {component}
            </div>
            <div className="absolute bottom-0 left-2 font-extralight  ">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
