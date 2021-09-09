import Head from '@comps/Head'
import Signin from '@comps/Login/signin'

export default function SignupPage() {
  return (
    <>
      <Head title="Ingresa" />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <Signin />
        </div>
      </div>
    </>
  )
}
