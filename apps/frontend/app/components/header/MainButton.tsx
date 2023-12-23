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
const MainButton = () => {
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
    <>
      {session && session.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center rounded whitespace-nowrap border border-current p-2 sm:px-4 sm:py-2 font-bold tracking-wider transition hover:rotate-2 hover:scale-110 text-accent focus:outline-none active:ring active:text-indigo-500">
            <CgProfile size={20} />
            {`${session.user.name} ${session.user.surname}`}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            onCloseAutoFocus={(event) => event.preventDefault()}
            className="px-4 mr-8 flex flex-col bg-white"
          >
            <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
            <DropdownMenuSeparator className="text-gray-600" />
            {session.user.email === 'administratorette@lapiouraterie.com' && (
              <Link href="/administration/produits" className="px-0 py-0">
                <DropdownMenuItem className="flex justify-start items-center gap-4 hover:bg-gray-100 px-6 py-4 text-gray-700 cursor-pointer">
                  <FiSettings size={15} />
                  <span className="text-sm font-medium"> Administration </span>
                </DropdownMenuItem>
              </Link>
            )}
            <DropdownMenuSeparator className="text-gray-600" />
            <Link href="/" className="">
              <DropdownMenuItem className="flex justify-start items-center gap-4 px-6 py-4 text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                <FaRegUser size={15} />

                <span className="text-sm font-medium"> Mon compte </span>
              </DropdownMenuItem>
            </Link>
            <Link href="/" className="px-0 py-0">
              <DropdownMenuItem className="flex justify-start items-center gap-4 px-6 py-4 text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
                <FaRegUser size={15} />

                <span className="text-sm font-medium"> Mes commandes </span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className=" px-0 py-0">
              {' '}
              <button
                className="flex w-full justify-start items-center gap-4 px-6 py-4 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:underline underline-offset-4 cursor-pointer"
                onClick={() => signOut({ redirect: false })}
              >
                <AiOutlineLogout size={15} color={'red'} />
                <span>Déconnexion</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/connexion" className="!no-underline" onClick={() => setLoad(true)}>
          <button 
          className="flex gap-4 items-center  rounded border border-current px-4 py-2 font-medium transition hover:-rotate-2 hover:scale-110 text-accent focus:outline-none active:ring active:text-indigo-500">
           {load  ? <FaSpinner className={'animate-spin'} /> :<CgProfile size={15} />}
            Connexion
          </button>
        </Link>
      )}
    </>
  )
}

export default MainButton
