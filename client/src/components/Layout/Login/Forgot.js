import InputText from '@comps/InputText'
import Link from '@comps/Link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import LoginLayout from '.'

export default function Forgot() {
  return (
    <>
      <LoginLayout onSubmit={() => {}} title="Recuperar cuenta" submitLabel="Enviar correo">
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