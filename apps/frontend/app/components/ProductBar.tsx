'use client'
import { HiOutlineSelector } from 'react-icons/hi'
import { useSortStore } from '../store/SortStore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const ProductBar = ({ productNumber }: { productNumber: Number }) => {
  // Store Management //
  const { updateSortOrder, sortName } = useSortStore()

  return (
    <div className="flex flex-wrap w-full justify-between items-center text-sm h-24 px-4 max-w-7xl">
      <div>
        <p>Il y a {productNumber as number} produits</p>
      </div>
      <div className="relative flex  items-center gap-2 h-10">
        <span className="flex items-center h-full text-sm font-medium text-gray-900">
          Trier par :
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between gap-8 h-full px-4 w-[190px] rounded-lg bg-white border-gray-300 hover:bg-gray-100 text-gray-700 sm:text-sm cursor-pointer">
            {sortName}
            <HiOutlineSelector />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" flex flex-col items-start  bg-white w-[190px] rounded-lg">
            <DropdownMenuItem
              onClick={() => updateSortOrder('', 'Pertinence')}
              className="productBarLink cursor-pointer"
            >
              <span className="px-4">Pertinence</span>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => updateSortOrder('name=asc', 'Nom de A à Z')}
              className="productBarLink cursor-pointer"
            >
              <span className="px-4">Nom de A à Z</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateSortOrder('name=desc', 'Nom de Z à A')}
              className="productBarLink cursor-pointer"
            >
              <span className="px-4"> Nom de Z à A</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateSortOrder('price=asc', 'Prix Croissants')}
              className="productBarLink cursor-pointer"
            >
              <span className="px-4">Prix Croissants</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => updateSortOrder('price=desc', 'Prix décroissant')}
              className="productBarLink cursor-pointer"
            >
              <span className="px-4">Prix décroissant</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default ProductBar
