'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import Loader from './Loader'
import Link from 'next/link'
import ProductBar from './ProductBar'
import { useSortStore } from '../store/SortStore'
// import { fetchProducts } from '../produits/page'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { useEffect } from 'react'

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

// const prestaShopProduct = async () => {
//   const res = await fetch(
//     'https://la-piouraterie.fr/api/products/40?ws_key=E9F1FAZ8IESE6GKAPV2UNJH8AE9W22KG&output_format=JSON',
//     {
//       headers: {
//         Cookie:
//           'PrestaShop-eab5c04718bc7cd39d36bb160f5773bb=def5020070202f74ee638dd82e7f5a2273e87c66778feda9093e0025dea7a83b054a38469fd9bd4098ecf630ff9c489b1d410b88ec2a2c7a5f0721a988c00683832c4249237077ae69931320fb6e27ae4cea00f7e6d96fd7ac10c7045b6a5f08dbe187e9ac82ab116b084cc9e7264dd7612c52dedb381acedfa2a0d106540ec52df4df1b14b0eb70605c1f469bd424145306a67ddd84d796f2c4b94305eb1673a7e87f2afcfc40e597eb1e3b9946a0b3f58ab1c64ace905dbfa38ecf6a6f9c4ddce2d0913542c7c4f8aa40a3898d7bd7c2e7255b8096568bc1',
//       },
//     },
//   )
//   const data = await res.json()
//   console.log(data)
// }

const MainProducts = ({
  products,
  catParams,
}: {
  products: any
  catParams: string
}) => {
  // Store Management //
  const { sortOrder } = useSortStore()

  // useEffect(() => {
  //   prestaShopProduct()
  // }, [])

  // Fetch Query //
  // const { data, isLoading, isError, isFetching } = useQuery({
  //   queryKey: ['products', catParams, sortOrder],
  //   queryFn: () => fetchProducts(catParams, sortOrder),
  //   initialData: products,
  // })

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center w-full h-full my-60">
  //       <Loader />
  //     </div>
  //   )
  // }

  // if (isError) {
  //   return <div>Une erreur est survenue</div>
  // }

  // const productNumber = data.length

  return (
    <section
      className={`relative px-4 w-full min-h-screen flex flex-col items-center bg-primary-foreground rounded-xl`}
    >
      <h1 className="text-4xl my-10 p-6 px-12 shadow-lg bg-accent/50 rounded-br-3xl rounded-tl-3xl">
        {productsTitle[catParams as keyof typeof productsTitle]}
      </h1>
      {/* <div className="relative flex flex-col items-center w-full max-w-7xl pt-0">
        <ProductBar productNumber={productNumber} />
        {data?.length === 0 ? (
          <div className="my-20">
            Il n&apos;y a pas de produits dans cette categorie
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 my-10 place-content-center">
            {data.map((product: any) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div> */}
    </section>
  )
}

export default MainProducts
