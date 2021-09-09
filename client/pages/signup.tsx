import Head from '@comps/Head'
import Signup from '@comps/Login/signup'

export default function SignupPage() {
  return (
    <>
      <Head title="Registrate" />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <Signup />
        </div>
      </div>
    </>
  )
}
