'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProdutCard'
import Loader from './Loader'
import { ProductsSchema } from '../schema/products.schema'
import Link from 'next/link'

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products')
  const data = await res.json()
  return ProductsSchema.parse(data)
}

const PopularProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>Une erreur est survenue</div>
  }

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-7xl p-5">
        <h1 className="text-4xl m-10">Produits Populaires</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 my-10 ">
          {data.map((product) => (
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
        <div className="flex w-full justify-end my-10">
          <Link
            className="relative group inline-flex items-center gap-2 rounded px-8 py-3 text-black group-hover:bg-black focus:outline-none focus:ring active:bg-indigo-500"
            href="/products"
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
      </div>
    </section>
  )
}

export default PopularProducts
