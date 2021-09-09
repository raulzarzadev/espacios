import Head from '@comps/Head'
import SetPassword from '@comps/Login/SetPassword'

export default function SignupPage() {
  return (
    <>
      <Head title="Confrima tu contraseña" />
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md">
          <SetPassword/>
        </div>
      </div>
    </>
  )
}
