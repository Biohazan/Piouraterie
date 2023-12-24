'use client'
import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'
import { useProductStore } from '../store/ProductStore'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { editProduct } from '@/lib/fetchFunction'
import { useSession } from 'next-auth/react'
import { redirectToProducts } from './produits/serverActions'

const AdminHeader = () => {
  const path = usePathname()
  const searchParams = useSearchParams()
  const product = useProductStore((state) => state)
  const productId = searchParams?.get('productId') as string
  const { data: session } = useSession()

  let dynamicTitle

  switch (productId) {
    case 'nouveau_produit':
      dynamicTitle = 'Nouveau produit'
      break
    case null:
      dynamicTitle = 'Tous les produits...'
      break
    default:
      dynamicTitle = product.name
  }

  const deleteItem = async () => {
    const options = {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
      user: session?.user
    }
    const deleteItem = await editProduct({ productId, options })
    if (deleteItem.status === 204) {
      redirectToProducts()
    }
  }

  return (
    <div className="adminHeader rounded-full mt-6 flex items-center justify-between min-h-[100px] w-full p-10 bg-primary-foreground shadow-md">
      <h1 className="text-xl font-bold">{dynamicTitle}</h1>
      {path?.split('/')[2] === 'ajouter_un_produit' ? (
        <div className="flex items-center gap-10">
          {productId !== 'nouveau_produit' && (
            <Dialog>
              <DialogTrigger className="group relative inline-block overflow-hidden rounded-full border border-red-500 px-5 py-2 focus:outline-none focus:ring cursor-pointer">
                <span className="absolute inset-y-0 right-0 w-[2px] bg-red-500 transition-all group-hover:w-full group-active:bg-red-500"></span>
                <span className="relative tracking-wider text-sm font-bold text-red-500 transition-colors group-hover:text-white">
                  Supprimer
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-xl border-b py-1">
                    Confirmation de suppression
                  </DialogTitle>
                  <DialogDescription className="py-1 text-base">
                    Etes vous sur de vouloir supprimer <strong>&quot;{product.name}&quot;</strong> ?
                  </DialogDescription>
                  <div className="flex gap-24 items-center justify-center py-6">
                    <DialogClose className="group relative inline-block overflow-hidden rounded-full border border-red-500 px-5 py-2 focus:outline-none focus:ring cursor-pointer">
                      <span className="absolute inset-y-0 right-0 w-[2px] bg-red-500 transition-all group-hover:w-full group-active:bg-red-500"></span>
                      <span className="relative tracking-wider text-sm font-bold text-red-500 transition-colors group-hover:text-white">
                        Non
                      </span>
                    </DialogClose>
                    <button
                      onClick={deleteItem}
                      className="group relative inline-block overflow-hidden rounded-full border border-accent px-5 py-2 focus:outline-none focus:ring cursor-pointer"
                    >
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-accent transition-all group-hover:w-full group-active:bg-accent"></span>
                      <span className="relative tracking-wider text-base font-bold text-accent transition-colors group-hover:text-white">
                        Oui
                      </span>
                    </button>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          <button
            type="submit"
            form="createProduct"
            value=""
            className="group relative inline-block overflow-hidden rounded-full border border-accent px-6 py-2 focus:outline-none focus:ring cursor-pointer"
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-accent transition-all group-hover:w-full group-active:bg-accent"></span>

            <span className="relative tracking-wider text-base font-bold text-accent transition-colors group-hover:text-white">
              Envoyer
            </span>
          </button>
        </div>
      ) : (
        <div className="searchbar relative">
          <label htmlFor="Search" className="sr-only">
            Rechercher un produit
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Rechercher un produit..."
            className="w-full rounded-md border-gray-200 py-2.5 pe-10 px-2 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>

              <FiSearch />
            </button>
          </span>
        </div>
      )}
    </div>
  )
}

export default AdminHeader
