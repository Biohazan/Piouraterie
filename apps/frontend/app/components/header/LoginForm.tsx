'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { LoginSchemaType, loginSchema } from '../../schema/login.schema'
import { usePathname, useRouter } from 'next/navigation'
import { MdAlternateEmail } from 'react-icons/md'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Link from 'next/link'
import Image from 'next/image'

const LoginForm = ({ setRegister }: any) => {
  const handleOpenRegister = (e: any) => {
    e.preventDefault()
    setRegister(true)
  }
  const [logErrors, setlogErrors] = useState(false)
  // View Password //
  const [viewPass, setViewPass] = useState<String>('password')
  const handleViewPassword = () => {
    if (viewPass === 'password') {
      setViewPass('text')
    } else setViewPass('password')
  }

  // Use Form //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  // Submit Function //
  const onSubmit: SubmitHandler<LoginSchemaType> = async (
    data: LoginSchemaType,
  ) => {
    setlogErrors(false)
    const result = await signIn('credentials', {
      username: data.email,
      password: data.password,
      redirect: false,
    })    
    if (result?.error) {
      console.log(result)
      setlogErrors(true)
    }
  }

  return (
    <form className="mb-6 mt-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {logErrors && (
        <span className="flex justify-center text-red-500 text-sm w-full">
          Cette combinaison email et mot de passe ne fonctionne pas
        </span>
      )}
      <div className="relative text-center">
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative mb-2">
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
            placeholder="Adresse mail"
            {...register('email')}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4 ">
            <MdAlternateEmail />
          </span>
        </div>
        {errors.email && (
          <span className="p-2 ml-2 text-red-600">
            {errors?.email?.message}
          </span>
        )}
      </div>

      <div className="relative text-center">
        <label htmlFor="password" className="sr-only">
          Mot de passe
        </label>

        <div className="relative mb-2">
          <input
            id="password"
            type={`${viewPass}`}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Mot de passe"
            {...register('password')}
          />

          <span
            onClick={handleViewPassword}
            className="absolute cursor-pointer inset-y-0 end-0 grid place-content-center px-4 "
          >
            {viewPass === 'password' ? <FaRegEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <span className="p-2 ml-2 text-red-600">
            {errors?.password?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white "
      >
        Connexion
      </button>
      <p className="text-center text-sm text-gray-500">
        Pas de compte ?
        <button className="underline px-2" onClick={handleOpenRegister}>
          Enregistrez vous
        </button>
      </p>
    </form>
  )
}

export default LoginForm
