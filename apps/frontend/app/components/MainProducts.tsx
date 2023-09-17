'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProdutCard'
import Loader from './Loader'
import { ProductsSchema } from '../schema/products.schema'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const fetchProducts = async (catParams: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/products/${catParams}`)
  const data = await res.json()
  return ProductsSchema.parse(data)
}

type ProductsTitleType = {
  all: string
  popular: string
  bijoux: string
  etuis_a_cigarettes: string
  portes_monnaies: string
  escarcelles: string
  blague_a_tabac: string
  sacs_and_sacoches: string
  etuis_jeux_de_cartes: string
  commandes_sur_mesure: string
  cheques_cadeaux: string
}

const MainProducts = () => {
  const params = useSearchParams()
  const catParams: string = params.get('category')
    ? (params.get('category') as string)
    : 'popular'

  const productsTitle: ProductsTitleType = {
    all: 'Tous les Produits',
    popular: 'Produits Populaires',
    etuis_a_cigarettes: 'Etuis à cigarettes',
    portes_monnaies: 'Portes Monnaie',
    escarcelles: 'Escarcelles',
    blague_a_tabac: 'Blague à tabac',
    sacs_and_sacoches: 'Sac et Sacoches',
    etuis_jeux_de_cartes: 'Etuis pour jeux de cartes',
    commandes_sur_mesure: 'Commandes sur mesure',
    bijoux: 'Bijoux',
    cheques_cadeaux: 'Chèques Cadeaux',
  }

  const { data, isLoading, isError, isFetching  } = useQuery({
    queryKey: ['products', catParams],
    queryFn: () => fetchProducts(catParams),
  })  

  if (isLoading) {
    return <div className="relative w-full h-full my-60"><Loader /></div>
  }

  if (isError) {
    return <div>Une erreur est survenue</div>
  }
  const productNumber = data?.length || 0
  sessionStorage.setItem("productCount", productNumber.toString())

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center w-full max-w-7xl p-5">
        <h1 className="text-4xl m-10">
          {productsTitle[catParams as keyof typeof productsTitle]}
        </h1>
        {data?.length === 0 ? (
          <div className='my-20'>Il n&apos;y a pas de produits dans cette categorie</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-8 my-10 ">
            {data?.map((product) => (
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
        <div className="flex w-full justify-end my-10">
          {catParams === 'popular' && (
            <Link
              className="relative group inline-flex items-center gap-2 rounded px-8 py-3 text-black group-hover:bg-black focus:outline-none focus:ring active:bg-indigo-500"
              href="/products?category=all"
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
          )}
        </div>
      </div>
    </section>
  )
}

export default MainProducts
