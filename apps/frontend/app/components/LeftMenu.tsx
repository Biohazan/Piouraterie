import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const LeftMenu = () => {
  return (
    <div className="w-64 p-4 my-6 ml-2 hidden lg:flex  rounded-xl bg-primary-foreground">
      <ul className="space-y-1 w-full">
        <li>
          <Link
            href="/produits?category=all"
            className="flex rounded-lg bg-gray-100 text-sm font-medium text-gray-700"
          >
           Tout les produits
          </Link>
        </li>

        {/* <li>
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
              </li> */}

            
            {/* </ul>
          </details> */}
        {/* </li> */}
      </ul>
    </div>
  )
}

export default LeftMenu
