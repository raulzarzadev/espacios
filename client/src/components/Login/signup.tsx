import Alert from '@comps/Alert'
import Division from '@comps/Division'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'

import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from 'src/hooks/useAuth'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email().required()
})
export default function Signup() {
  const { handleLogin } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const [alert, setAlert] = useState(false)

  const onSubmit = (form: object) => {
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
      handleLogin()
    }, 5000)
  }
  useEffect(() => {}, [alert])

  return (
    <div className=" p-4 rounded-xl shadow-2xl w-full">
      {alert && (
        <div
          className={`
              top-2  
              fixed
              transform 
              transition-all
              duration-700
              `}
        >
          <Alert
            variant="success"
            title="Correo enviado"
            description="Un correo electronico fue enviado, revisa tu correo para continuar con el proceso de registro"
            handleClose={() => setAlert(false)}
            link="/set-password?token=123"
          />
        </div>
      )}
      <div className="my-12 flex mx-auto justify-center text-3xl font-bold">
        {'< Logo />'}
      </div>
      <p className="w-4/5 mx-auto text-center my-4">Registrate</p>
      <form
        className="flex flex-col items-center w-3/5 mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-2 w-full">
          <Text
            {...register('email')}
            placeholder="correo"
            errorText={errors?.email?.message}
            helperText="Recibiras un correo para continuar"
            fullWidth
          />
        </div>

        <div className="my-4 w-full">
          <Button label="Enviar correo" fullWidth type="submit" />
        </div>
      </form>
      <div className="flex flex-col items-center ">
        <div className="my-4">
          <Link href="/">¿Ya tienes cuenta?</Link>
        </div>
      </div>
    </div>
  )
}
