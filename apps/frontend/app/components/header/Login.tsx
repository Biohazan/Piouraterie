'use client'
import React, { MouseEvent, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { LoginSchemaType, loginSchema } from '../../schema/login.schema'
import { signIn } from 'next-auth/react'

const loginUser = async (data: LoginSchemaType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/login`, {
    method: 'POST',
    body: new URLSearchParams(data),
  })
  const ResData = await res.json()
  return ResData
}

const Login = () => {

  // View Password //
  const [viewPass, setViewPass] = useState<String>('password')
  const handleViewPassword = () => {
    if (viewPass === 'password') {
      setViewPass('text')
    } else setViewPass('password')
  }

  const { mutate, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      console.log('Onsucces', data)
      // handleCloseLogin()
    },
    onError: () => {
      alert('there was an error')
    },
    // onSettled: () => {
    //   queryClient.invalidateQueries('create');
    // }
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit: SubmitHandler<LoginSchemaType> = (data: LoginSchemaType) => {
    console.log('onsubmit', data)
    // mutate(data)
    signIn('credentials', { username: data.email, password: data.password })
  }

  const handleSignInWithMail = (e: any) => {
    e.preventDefault()
    signIn()
  }
  return (
    <form
      action=""
      className="mb-0 max-w-lg space-y-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <span
        className="absolute top-4 right-6 cursor-pointer"
        onClick={() => handleCloseLogin()}
      >
        X
      </span> */}
      <p className="text-center text-lg font-medium">Connectez vous</p>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            {...register('email')}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Mot de passe
        </label>

        <div className="relative">
          <input
            type={`${viewPass}`}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Mot de passe"
            {...register('password')}
          />

          <span
            className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
            onClick={handleViewPassword}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Connexion
      </button>

      <button
        onClick={(e) => handleSignInWithMail(e)}
        className="block w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
      >
        Connexion with email
      </button>
      <p className="text-center text-sm text-gray-500">
        Pas de compte ?
        <a
          className="underline px-2"
          href="/signin"
          // onClick={handleSignIn}
        >
          Enregistrez vous
        </a>
      </p>
    </form>
  )
}

export default Login
