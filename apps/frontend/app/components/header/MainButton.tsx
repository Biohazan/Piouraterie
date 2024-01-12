'use client'
import { CgProfile } from 'react-icons/cg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineLogout } from 'react-icons/ai'
import { signOut, useSession } from 'next-auth/react'
import { FaRegUser, FaSpinner } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import LoginForm from './LoginForm'
import Image from 'next/image'
import logo from '@/public/logo.jpg'
import { IconContext } from 'react-icons'
import RegisterForm from '../RegisterForm'

const MainButton = () => {
  const [openRegister, setOpenRegister] = useState(false)
  // Session Management //
  const { data: session } = useSession()
  const [load, setLoad] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/connexion') {
      setLoad(false)
    }
  }, [pathname])

  return (
    <Dialog
      onOpenChange={() => {
        setOpenRegister(false)
      }}
    >
      {session && session.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center text-sm rounded whitespace-nowrap border border-current p-2 sm:px-3 sm:py-2 font-bold tracking-wider transition hover:rotate-2 hover:scale-110 text-accent focus:outline-none active:ring active:text-indigo-500">
            <CgProfile size={20} />
            {`${session.user.name} ${session.user.surname}`}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onCloseAutoFocus={(event) => event.preventDefault()}
            className="px-4 mr-8 flex flex-col bg-white"
          >
            <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
            <DropdownMenuSeparator className="text-gray-600" />
            {session.user.role === 'admin' && (
              <Link href="/administration/produits" className="px-0 py-0">
                <DropdownMenuItem className="flex justify-start items-center gap-4 hover:bg-accent px-4 py-2 text-gray-700 cursor-pointer">
                  <FiSettings size={15} />
                  <span className="text-sm font-medium"> Administration </span>
                </DropdownMenuItem>
              </Link>
            )}
            <DropdownMenuSeparator className="text-gray-600" />
            <Link href="/" className="px-0 py-1 !no-underline">
              <DropdownMenuItem className="flex justify-start items-center gap-4 px-4 py-2 text-gray-500 hover:bg-accent hover:text-gray-700 cursor-pointer">
                <FaRegUser size={15} />

                <span className="text-sm font-medium"> Mon compte </span>
              </DropdownMenuItem>
            </Link>
            <Link href="/" className="px-0 py-1 !no-underline">
              <DropdownMenuItem className="flex justify-start items-center gap-4 px-4 py-2 text-gray-500 hover:bg-accent hover:text-gray-700 cursor-pointer">
                <FaRegUser size={15} />

                <span className="text-sm font-medium"> Mes commandes </span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" px-0 py-0">
              <button
                className="flex w-full justify-start items-center gap-4 px-4 py-3 text-sm font-medium rounded-sm text-gray-500 hover:bg-accent hover:text-gray-700 cursor-pointer"
                onClick={() => signOut()}
              >
                <AiOutlineLogout size={15} color={'red'} />
                <span>Déconnexion</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <DialogTrigger className="flex gap-4 items-center text-xs rounded border border-current px-3 py-2 font-medium transition hover:-rotate-2 hover:scale-110 text-accent focus:outline-none active:ring active:text-indigo-500">
            {load ? (
              <FaSpinner className={'animate-spin'} />
            ) : (
              <CgProfile size={15} />
            )}
            Connexion
          </DialogTrigger>
          <DialogContent className="max-w-xs sm:max-w-md">
            <div className="w-full flex flex-col ">
              <div className="flex flex-col gap-4 items-center relative">
                <Image
                  src={logo}
                  quality={20}
                  width={200}
                  alt="Logo la piouraterie"
                  className="h-auto rounded-full absolute -top-32"
                />
                <h1 className="text-center text-xl font-bold text-accent mt-24">
                  {openRegister ? 'Créer un compte' : 'Connectez vous'}
                </h1>
              </div>
              <IconContext.Provider value={{ color: 'grey' }}>
                {openRegister ? (
                  <RegisterForm setRegister={setOpenRegister} />
                ) : (
                  <LoginForm setRegister={setOpenRegister} />
                )}
              </IconContext.Provider>
            </div>
          </DialogContent>
        </>
      )}
    </Dialog>
  )
}

export default MainButton
