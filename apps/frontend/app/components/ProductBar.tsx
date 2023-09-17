import { useState } from 'react'
import { HiOutlineSelector } from 'react-icons/hi'

const ProductBar = () => {
  const [isDropdown, setIsDropdown] = useState(false)

  const handleClickIn = () => {
    setIsDropdown(true)
  }

  const handleClickOut = () => {
    setIsDropdown(false)
  }
  
  const productNumber = sessionStorage.getItem('productCount')

  return (
    <div className="flex w-full justify-between items-center h-24 px-4 max-w-7xl">
      <div>
        <p>Il y a {productNumber} produits</p>
      </div>
      <div
        className="relative flex items-center gap-4 h-12"
        onMouseLeave={handleClickOut}
      >
        <span className="flex items-center h-full text-sm font-medium text-gray-900 px-4">
          Trier par :
        </span>

        <button
          className="flex items-center justify-between gap-10 h-full px-4 w-[190px] rounded-lg bg-white border-gray-300 hover:bg-gray-100 text-gray-700 sm:text-sm cursor-pointer"
          onClick={handleClickIn}
        >
          Pertinence
          <HiOutlineSelector />
        </button>
        {isDropdown && (
          <div className="absolute z-10 top-[48px] right-0 flex flex-col items-start  bg-white w-[190px] rounded-lg">
            <a href="" className="productBarLink">
              <span className="px-4">Pertinence</span>
            </a>
            <a href="" className="productBarLink">
              <span className="px-4">Nom de A à Z</span>
            </a>
            <a href="" className="productBarLink">
              <span className="px-4"> Nom de Z à A</span>
            </a>
            <a href="" className="productBarLink">
              <span className="px-4">Prix Croissants</span>
            </a>
            <a href="" className="productBarLink">
              <span className="px-4">Prix décroissant</span>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductBar
