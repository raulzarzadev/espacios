import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import Signup from '@comps/Login/signup'

export default function SignupPage() {
  return (
    <RouteType type="not-logged-in">
      <Head title="Registrate" />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <Signup />
        </div>
      </div>
    </RouteType>
  )
}
