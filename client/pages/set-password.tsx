import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import SetPassword from '@comps/Login/SetPassword'

export default function SignupPage() {
  return (
    <>
      <Head title="Confrima tu contraseña" />
      <RouteType type="not-logged-in">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <SetPassword />
          </div>
        </div>
      </RouteType>
    </>
  )
}
