import InputText from '@comps/InputText'
import Link from '@comps/Link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'

export default function SingInForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="relative h-16 w-16 mx-auto">
          <Image
            layout="fill"
            objectFit="fill"
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ingresa
        </h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="my-4">
              <InputText placeholder="Correo Electronico" />
            </div>
            <div className="my-4">
              <InputText placeholder="Contraseña" />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="text-sm">
              <Link href="/recover">¿Olvida tu contraseña?</Link>
            </div>
            <div className="text-sm">
              <Link href="/signup">Registrate</Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Ingresa
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
