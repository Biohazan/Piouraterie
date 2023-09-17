'use client'

import Image from 'next/image'
import logo from '@/public/logo_long.jpg'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'

function Header() {
  const [isShow, setIsShow] = useState(false)

  const handleMouseEnter = () => {
    setIsShow(true)
  }

  const handleMouseLeave = () => {
    setIsShow(false)
  }

  return (
    <div className="headerWrapper relative flex justify-end w-full bg-white py-4 shadow-md">
      <a href='/' className="flex items-center h-full absolute top-0 left-5">
        <Image
          src={logo}
          quality={20}
          width={200}
          alt="Logo la piouraterie"
          className="h-auto"
        />
      </a>
      <nav className="headerWrapper flex justify-around items-center w-max">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer"
        >
          <div className="relative">
            <a href="#" className="inline-flex items-center gap-3">
              Maroquinerie
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {isShow && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Etuis à cigarettes
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Portes monnaies
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Escarcelles{' '}
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Blague à tabac{' '}
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Sacs & Sacoches{' '}
                  </a>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Etuis pour jeux de cartes{' '}
                  </a>
                </div>
              </div>
            )}
          </div>
        </li>

        <li>
          <a href="" className='p-2'>Bijoux</a>
        </li>
        <li>
          <a href="" className='p-2'>Commandes sur mesure</a>
        </li>
        <li>
          <a href="" className='p-2'>Chèques Cadeaux</a>
        </li>
      </nav>
      <div className="flex items-center mx-6">
        <button className="flex gap-2 items-center rounded border border-current px-4 py-2 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
          <CgProfile />
          Connexion
        </button>{' '}
      </div>
    </div>
  )
}

export default Header
