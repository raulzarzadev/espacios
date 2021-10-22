import Head from '@comps/Head'
import RouteType from '@comps/HOCS/RouteType'
import Signin from '@comps/Login/signin'

export default function SignupPage() {
  return (
    <RouteType type="not-logged-in">
        <Head title="Ingresa" />
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md">
            <Signin />
          </div>
        </div>
    </RouteType>
  )
}
