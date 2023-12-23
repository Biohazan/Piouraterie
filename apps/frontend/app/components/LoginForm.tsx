'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { LoginSchemaType, loginSchema } from '../schema/login.schema'
import { usePathname, useRouter } from 'next/navigation'
import { MdAlternateEmail } from 'react-icons/md'
import { FaEyeSlash, FaRegEye } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import Link from 'next/link'

const LoginForm = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [error, setError] = useState('')
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
    watch,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })

  // Submit Function //
  const onSubmit: SubmitHandler<LoginSchemaType> = async (
    data: LoginSchemaType,
  ) => {
    const result = await signIn('credentials', {
      username: data.email,
      password: data.password,
      redirect: false,
    })
    if (result?.error) {
      console.log(result.error)
    } else {
      router.back()
    }
  }

  return (
    <div className="mx-6 w-96">
      <IconContext.Provider value={{ color: 'grey' }}>
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl ">
          Connectez vous
        </h1>
        <form
          className="mb-0 mt-6 space-y-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <Link className="underline px-2" href="/creation-de-compte">
              Enregistrez vous
            </Link>
          </p>
        </form>
      </IconContext.Provider>
    </div>
  )
}

export default LoginForm
