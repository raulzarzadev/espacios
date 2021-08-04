import InputText from '@comps/InputTextIcon'
import Link from '@comps/Link'
import LoginLayout from '.'

export default function Singup() {
  return (
    <>
      <LoginLayout
        onSubmit={() => {}}
        title="Sing up"
        submitLabel="Registrate"
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="my-4">
            <InputText placeholder="Correo Electronico" />
          </div>
        </div>

        <div className="flex items-center justify-center ">
          {/* <div className="text-sm">
            <Link href="/recover">¿Olvida tu contraseña?</Link>
          </div> */}
          <div className="text-sm">
            <Link href="/login">¿Ya tienes cuenta? Ingresa</Link>
          </div>
        </div>
      </LoginLayout>
    </>
  )
}
