'use client'
import { MdAlternateEmail } from 'react-icons/md'
import { FaRegEye, FaEyeSlash } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchemaType, registerSchema } from '../schema/register.schema'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const RegisterForm = ({ setRegister }: any) => {
  const handleCloseRegister = (e: any) => {
    e.preventDefault()
    setRegister(false)
  }

  const router = useRouter()

  // View Password //
  const [viewPass, setViewPass] = useState<String>('password')
  const handleViewPassword = () => {
    if (viewPass === 'password') {
      setViewPass('text')
    } else setViewPass('password')
  }

  const [viewConfirmPass, setViewConfirmPass] = useState<String>('password')
  const handleViewConfirmPassword = () => {
    if (viewConfirmPass === 'password') {
      setViewConfirmPass('text')
    } else setViewConfirmPass('password')
  }

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit: SubmitHandler<RegisterSchemaType> = async (
    data: RegisterSchemaType,
  ) => {
    // console.log('onsubmit', data)
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/register`, {
      method: 'POST',
      body: new URLSearchParams(data),
    })
    // console.log('Onsubmit res:', res)
    const ResData = await res.json()
    // console.log('Onsubmit resData:', ResData)
    if (res.status === 400) {
      console.log(ResData.errors)
      setError('email', {
        type: 'manual',
        message: `${ResData.message}`,
      })
    }
    if (res.status === 201) {
      // console.log(data)
      signIn('credentials', {
        username: data.email,
        password: data.password,
        redirect: false,
      })
      // router.push('/')
    }
  }
  return (
    <form className="mb-0 mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2">
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            Nom
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nom"
            {...register('name', { required: 'nom requis' })}
          />
        </div>
        <div className="relative">
          <label htmlFor="surname" className="sr-only">
            Prénom
          </label>
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Prénom"
            {...register('surname', { required: 'prénom requis' })}
          />
        </div>
      </div>
      {(errors?.name || errors?.surname) && (
        <div className='flex justify-around'>
          {errors.name && (
            <span className="p-2 ml-2 text-red-600">{errors.name.message}</span>
          )}
          {errors.surname && (
            <span className="p-2 ml-2 text-red-600">
              {errors.surname.message}
            </span>
          )}
        </div>
      )}
      <div className="relative text-center">
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative mb-2">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Adresse mail"
            {...register('email')}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4 ">
            <MdAlternateEmail />
          </span>
        </div>
        {errors.email && (
          <span className="p-2 ml-2 text-red-600">{errors.email.message}</span>
        )}
      </div>
      {/* Password */}
      <div className="relative text-center">
        <label htmlFor="password" className="sr-only">
          Mot de passe
        </label>

        <div className="relative mb-2">
          <input
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

      {/* Password confirmation */}
      <div className="relative text-center">
        <label htmlFor="confirmPassword" className="sr-only">
          Confirmer votre mot de passe
        </label>

        <div className="relative mb-2">
          <input
            type={`${viewConfirmPass}`}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Confirmer votre mot de passe"
            {...register('confirmPassword')}
          />

          <span
            onClick={handleViewConfirmPassword}
            className="absolute cursor-pointer inset-y-0 end-0 grid place-content-center px-4 "
          >
            {viewConfirmPass === 'password' ? <FaRegEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.confirmPassword && (
          <span className="p-2 ml-2 text-red-600">
            {errors?.confirmPassword?.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        S&apos;enregistrer
      </button>
      <p className="text-center text-sm text-gray-500">
        Déja un compte ?
        <button className="underline px-2" onClick={handleCloseRegister}>
          Se connecter
        </button>
      </p>
    </form>
  )
}

export default RegisterForm
