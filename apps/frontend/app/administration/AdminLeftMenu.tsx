import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

const AdminLeftMenu = () => {
  
  return (
    <div className="flex flex-auto flex-col m-6 mr-0 w-80 rounded-full relative min-h-[100px] pt-6 bg-primary-foreground shadow-2xl">
      <ul className="space-y-4 sticky top-20 my-16">
        <li className=''>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex gap-4 cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-secondary hover:text-gray-700">
              <span className="text-lg font-bold"> Produits </span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <IoIosArrowDown />
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/administration/produits"
                  className="block rounded-lg p-3 text-lg font-bold !no-underline text-black hover:bg-secondary hover:text-gray-700"
                >
                  Tous les produits
                </Link>
              </li>
              <li>
                <Link
                  href="/administration/ajouter_un_produit?productId=nouveau_produit"
                  className="block rounded-lg p-3 text-lg font-bold !no-underline text-black hover:bg-secondary hover:text-gray-700"
                >
                  Ajouter un produit
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex  cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-secondary hover:text-gray-700">
              <span className="text-lg font-bold">Clients</span>

              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <IoIosArrowDown />
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              <li>
                <Link
                  href="/produits?category=etuis_à_cigarettes"
                  className="block rounded-lg px-4 py-2 text-lg font-bold text-black hover:bg-secondary hover:text-gray-700"
                >
                  Commandes
                </Link>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}

export default AdminLeftMenu
