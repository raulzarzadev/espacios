import Alert from '@comps/Alert'
import Division from '@comps/Division'
import Button from '@comps/inputs/Button'
import Text from '@comps/inputs/Text'
import Link from '@comps/Link'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  password: yup.string().required()
})
export default function SetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (form: object) => {
    console.log(form)
    setAlert(true)
  }
  const [alert, setAlert] = useState(false)
  return (
    <div className=" p-4 rounded-xl shadow-2xl">
      <div className="my-12 flex mx-auto justify-center text-3xl font-bold">
        {'< Logo />'}
      </div>
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
            title="Contraseña actualizada"
            description="¡Listo! Ahora puedes acceder con tus nuevas credenciales"
            handleClose={() => setAlert(false)}
            link="/signin"
          />
        </div>
      )}
      <form
        className="flex flex-col items-center w-3/5 mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="my-2 w-full">
          <Text
            type="password"
            {...register('password')}
            placeholder="contraseña"
            errorText={errors?.password?.message}
            fullWidth
          />
        </div>
        <div className="my-2 w-full">
          <Text
            type="password"
            {...register('confirmation')}
            placeholder="Confirma tu contraseña"
            errorText={errors?.confirmation?.message}
            fullWidth
          />
        </div>
        <div className="my-4 w-full">
          <Button label="Confirmar password" fullWidth />
        </div>
      </form>
      <div className="flex flex-col items-center ">
        <div className="my-4">
          <Link href="/signup">¿Token invalido? Reenviar correo</Link>
        </div>
      </div>
    </div>
  )
}
