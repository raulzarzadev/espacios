import InputText from '@comps/InputText'
import Link from '@comps/Link'
import { LockClosedIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import LoginLayout from '.'

export default function Singin() {
  const [form, setForm] = useState({})
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = form
    console.log('email,form', email, form)
  }

  useEffect(() => {
    if (!form.email || !form.password) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [form.email, form.password])

  return (
    <>
      <LoginLayout
        onSubmit={handleSubmit}
        title="Ingresar"
        submitLabel="Ingresa"
        submitDisabled={!isValid}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div className="my-4">
            <InputText
              name="email"
              onChange={handleChange}
              placeholder="Correo Electronico"
            />
          </div>
          <div className="my-4">
            <InputText
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Contraseña"
            />
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
      </LoginLayout>
    </>
  )
}
