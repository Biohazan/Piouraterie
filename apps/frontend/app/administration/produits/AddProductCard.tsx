import Link from 'next/link'
import { FiPlusCircle } from 'react-icons/fi'

const AddProductCard = ({category}: {category: string}) => {
  return (
    <Link
      href={`/administration/ajouter_un_produit?productId=nouveau_produit&category=${category}`}
      className="flex w-56 h-80 justify-center items-center rounded-lg p-4 shadow-sm hover:shadow-xl hover:scale-105 outline-1 hover:outline transition-all shadow-indigo-100 bg-accent"
    >
      <div className="text-7xl">
        <FiPlusCircle />
      </div>
    </Link>
  )
}

export default AddProductCard
