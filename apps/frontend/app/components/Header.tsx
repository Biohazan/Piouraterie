'use client'

import '../styles/header.css'
import Image from 'next/image'
import logo from '@/public/logo_long.jpg'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'
import Link from 'next/link'

function Header() {
  const [isShowSubMenu, setIsShowSubMenu] = useState(false)

  const handleCloseMenu = () => {
    const toggle = document.getElementById('toggle') as HTMLInputElement
    toggle.checked = false
  }

  const handleMouseEnter = () => {
    setIsShowSubMenu(true)
  }

  const handleMouseLeave = () => {
    setIsShowSubMenu(false)
  }

  return (
    <div className="relative flex lg:flex-row-reverse justify-end lg:justify-start items-center w-full bg-white py-4 shadow-md">
      <a href="/" className="flex items-center h-full absolute top-0 left-5">
        <Image
          src={logo}
          quality={20}
          width={200}
          alt="Logo la piouraterie"
          className="h-auto"
        />
      </a>
      <div className="flex items-center mx-6">
        <button className="flex gap-2 items-center rounded border border-current px-4 py-2 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500">
          <CgProfile />
          Connexion
        </button>{' '}
      </div>
      {/* Burger */}
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" aria-label="Ouvrir le menu" className="mx-6">
        <span id="burger"></span>
      </label>
      <nav className="navWrapper absolute lg:visible lg:relative top-[65px] lg:top-0 right-12 lg:right-0 flex flex-col lg:flex-row justify-around items-center w-max bg-white z-10 py-4 shadow-lg lg:shadow-none">
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="cursor-pointer "
        >
          <div className="relative flex flex-col">
            <div className="inline-flex items-center gap-3">
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
            </div>

            {isShowSubMenu && (
              <div
                className="absolute end-0 top-4 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2" onClick={handleMouseLeave}>
                  <Link
                    href="/products?category=etuis_a_cigarettes"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Etuis à cigarettes
                  </Link>

                  <Link
                    href="/products?category=portes_monnaies"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Portes monnaies
                  </Link>

                  <Link
                    href="/products?category=escarcelles"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Escarcelles{' '}
                  </Link>

                  <Link
                    href="/products?category=blague_a_tabac"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Blague à tabac{' '}
                  </Link>
                  <Link
                    href="/products?category=sacs_and_sacoches"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Sacs & Sacoches{' '}
                  </Link>
                  <Link
                    href="/products?category=etuis_jeux_de_cartes"
                    className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                    onClick={handleCloseMenu}
                  >
                    Etuis pour jeux de cartes{' '}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </li>

        <li>
          <Link
            href="/products?category=bijoux"
            className="p-2"
            onClick={handleCloseMenu}
          >
            Bijoux
          </Link>
        </li>
        <li>
          <Link href="/products?category=commandes_sur_mesure" className="p-2" onClick={handleCloseMenu}>
            Commandes sur mesure
          </Link>
        </li>
        <li>
          <Link
            href="/products?category=cheques_cadeaux"
            className="p-2"
            onClick={handleCloseMenu}
          >
            Chèques Cadeaux
          </Link>
        </li>
      </nav>
    </div>
  )
}

export default Header
