'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import Loader from './Loader'
import Link from 'next/link'
import ProductBar from './ProductBar'
import { useSortStore } from '../store/SortStore'
import { fetchProducts } from '../produits/page'

type ProductsTitleType = {
  all: string
  popular: string
  etuis_à_cigarettes: string
  portes_monnaies: string
  escarcelles: string
  blague_à_tabac: string
  sacs: string
  sacoches: string
  etuis_jeux_de_cartes: string
  commandes_sur_mesure: string
  colliers: string
  boucles_d_oreilles: string
  cheques_cadeaux: string
}

const MainProducts = ({
  products,
  catParams,
}: {
  products: any
  catParams: string
}) => {

  // Store Management //
  const { sortOrder } = useSortStore()

  // Category Object //
  const productsTitle: ProductsTitleType = {
    all: 'Tous les Produits',
    popular: 'Produits Populaires',
    etuis_à_cigarettes: 'Etuis à cigarettes',
    portes_monnaies: 'Portes Monnaie',
    escarcelles: 'Escarcelles',
    blague_à_tabac: 'Blague à tabac',
    sacs: 'Sacs',
    sacoches: 'Sacoches',
    etuis_jeux_de_cartes: 'Etuis pour jeux de cartes',
    commandes_sur_mesure: 'Commandes sur mesure',
    colliers: 'Colliers',
    boucles_d_oreilles: "Boucles d'oreilles",
    cheques_cadeaux: 'Chèques Cadeaux',
  }

  // Fetch Query //
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ['products', catParams, sortOrder],
    queryFn: () => fetchProducts(catParams, sortOrder),
    initialData: products,
  })

  if (isLoading) {
    return (
      <div className="relative w-full h-full my-60">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return <div>Une erreur est survenue</div>
  }

  const productNumber = data.length

  return (
    <section className="relative w-full  flex flex-col items-center justify-center">
      {catParams === 'popular' ? (
        ''
      ) : (
        <ProductBar productNumber={productNumber} />
      )}
      <div className="relative flex flex-col items-center w-full max-w-7xl pt-0">
        <h1 className="text-2xl m-10">
          {productsTitle[catParams as keyof typeof productsTitle]}
        </h1>
        {data?.length === 0 ? (
          <div className="my-20">
            Il n&apos;y a pas de produits dans cette categorie
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 my-10 w-full place-items-center ">
            {data?.map((product: any) => (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                picUrl={product.picUrl}
                description={product.describe}
                price={product.price}
              />
            ))}
          </div>
        )}
        {catParams === 'popular' && (
          <div className="flex w-full justify-end m-10">
            <Link
              className="relative group inline-flex items-center gap-2 rounded px-8 py-3  text-black group-hover:bg-black focus:outline-none focus:ring active:bg-indigo-500"
              href="/produits?category=all"
            >
              <span className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full "></span>

              <span className="text-sm font-medium transition-colors group-hover:text-white z-10">
                {' '}
                Tout les produits{' '}
              </span>

              <svg
                className="h-5 w-5 rtl:rotate-180 z-10 group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default MainProducts
