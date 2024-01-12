'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import Loader from './Loader'
import Link from 'next/link'
import ProductBar from './ProductBar'
import { useSortStore } from '../store/SortStore'
import { fetchProducts } from '../produits/page'
import { FaLongArrowAltRight } from 'react-icons/fa'

type ProductsTitleType = {
  all: string
  popular: string
  etuis_à_cigarettes: string
  portes_monnaies: string
  escarcelles: string
  blague_à_tabac: string
  sacs_et_sacoches: string
  etuis_jeux_de_cartes: string
  commandes_sur_mesure: string
  colliers: string
  boucles_d_oreilles: string
  cheques_cadeaux: string
}

  // Category Object //
  export const productsTitle: ProductsTitleType = {
    all: 'Tous les Produits',
    popular: 'Produits Populaires',
    etuis_à_cigarettes: 'Etuis à cigarettes',
    portes_monnaies: 'Portes Monnaie',
    escarcelles: 'Escarcelles',
    blague_à_tabac: 'Blague à tabac',
    sacs_et_sacoches: 'Sacs et Sacoches',
    etuis_jeux_de_cartes: 'Etuis pour jeux de cartes',
    commandes_sur_mesure: 'Commandes sur mesure',
    colliers: 'Colliers',
    boucles_d_oreilles: "Boucles d'oreilles",
    cheques_cadeaux: 'Chèques Cadeaux',
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



  // Fetch Query //
  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ['products', catParams, sortOrder],
    queryFn: () => fetchProducts(catParams, sortOrder),
    initialData: products,
  })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full my-60">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return <div>Une erreur est survenue</div>
  }

  const productNumber = data.length

  return (
    <section className={`relative px-4 w-full min-h-screen flex flex-col items-center bg-primary-foreground rounded-xl`}>
       <h1 className="text-4xl my-10 p-6 px-12 shadow-lg bg-accent/50 rounded-br-3xl rounded-tl-3xl">
          {productsTitle[catParams as keyof typeof productsTitle]}
        </h1>
      <div className="relative flex flex-col items-center w-full max-w-7xl pt-0">
      <ProductBar productNumber={productNumber} />
        {data?.length === 0 ? (
          <div className="my-20">
            Il n&apos;y a pas de produits dans cette categorie
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 my-10 w-full place-items-center ">
            {data.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default MainProducts
