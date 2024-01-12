import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

const AdminLeftMenu = () => {
  
  return (
    <div className="flex flex-auto flex-col m-6 mr-0 w-64 rounded-xl relative min-h-[100px] pt-6 bg-primary-foreground shadow-2xl">
      <ul className="space-y-1 sticky top-20 ">
        <li className='p-2'>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex my-2 cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-accent hover:text-gray-700">
              <span className=""> Produits </span>

              <span className="shrink-0 transition duration-200 group-open:-rotate-180">
                <IoIosArrowDown color={'grey'}/>
              </span>
            </summary>
            <ul className="space-y-2 px-4">
              <li className='p-0'>
                <Link
                  href="/administration/produits"
                  className="block rounded-lg p-2 text-sm  !no-underline text-black hover:bg-accent hover:text-gray-700"
                >
                  Tous les produits
                </Link>
              </li>
              <li className='p-0 '>
                <Link
                  href="/administration/ajouter_un_produit?productId=nouveau_produit"
                  className="block rounded-lg p-2 text-sm  !no-underline text-black hover:bg-accent hover:text-gray-700"
                >
                  Ajouter un produit
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li className='p-2'>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-black hover:bg-accent hover:text-gray-700">
              <span className="">Clients</span>

              <span className="shrink-0 transition duration-200 group-open:-rotate-180">
                <IoIosArrowDown color={'grey'}/>
              </span>
            </summary>

            <ul className="space-y-2 px-4">
              <li className='p-0'>
                <Link
                  href="/produits?category=etuis_à_cigarettes"
                  className="block rounded-lg px-4 py-2 text-sm !no-underline  text-black hover:bg-accent hover:text-gray-700"
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
