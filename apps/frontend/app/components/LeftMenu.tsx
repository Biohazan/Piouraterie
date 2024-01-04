import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const LeftMenu = () => {
  return (
    <div className="w-80 p-5 mt-10 hidden lg:block">
      <ul className="space-y-1">
        <li>
          <Link
            href="/produits?category=all"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Tout les produits
          </Link>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Maroquinerie </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <IoIosArrowDown />
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/produits?category=etuis_à_cigarettes"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                 Etuis à cigarettes
                </Link>
              </li>

              <li>
                <Link
                  href="/produits?category=portes_monnaies"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Portes Monnaie
                </Link>
              </li>

              <li>
                <Link
                  href="/produits?category=escarcelles"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Escarcelles
                </Link>
              </li>

              <li>
                <Link
                  href="/produits?category=blague_à_tabac"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Blague à tabac
                </Link>
              </li>

              <li>
                <Link
                  href="/produits?category=sacs_et_sacoches"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Sac et Sacoches
                </Link>
              </li>

              <li>
                <Link
                  href="/produits?category=etuis_jeux_de_cartes"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Etuis pour jeux de cartes
                </Link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <Link
            href="/produits?category=bijoux"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Bijoux
          </Link>
        </li>

        <li>
          <Link
            href="/produits?category=commandes_sur_mesure"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Commandes sur mesure
          </Link>
        </li>

        <li>
          <Link
            href="/produits?category=cheques_cadeaux"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Chèques Cadeaux
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default LeftMenu
