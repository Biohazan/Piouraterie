import Link from 'next/link'
import React from 'react'

const LeftMenu = () => {
  return (
    <div className="w-80 p-5 mt-24">
      <ul className="space-y-1">
        <li>
          <a
            href="/products?category=all"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
          >
            Tout les produits
          </a>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium"> Maroquinerie </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/products?category=etuis_a_cigarettes"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                 Etuis à cigarettes
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=portes_monnaies"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Portes Monnaie
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=escarcelles"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Escarcelles
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=blague_a_tabac"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Blague à tabac
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=sacs_and_sacoches"
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Sac et Sacoches
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=etuis_jeux_de_cartes"
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
            href="/products?category=bijoux"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Bijoux
          </Link>
        </li>

        <li>
          <Link
            href="/products?category=commandes_sur_mesure"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            Commandes sur mesure
          </Link>
        </li>

        <li>
          <Link
            href="/products?category=cheques_cadeaux"
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
