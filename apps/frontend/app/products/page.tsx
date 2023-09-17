'use client'
import PopularProducts from '../components/PopularProducts'
import LeftMenu from '../components/LeftMenu'
import ProductBar from '../components/ProductBar'
import { ProductsSchema } from '../schema/products.schema'
import { useQuery } from '@tanstack/react-query'
import Loader from '../components/Loader'

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products')
  const data = await res.json()
  return ProductsSchema.parse(data)
}

const Products = () => {
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

  const productNumber = data.length
  
  return (
    <section className="flex">
      <LeftMenu />
      <div className="flex flex-col items-center w-full p-6 text-center">
        <ProductBar productNumber={productNumber} />
        <PopularProducts />
      </div>
    </section>
  )
}

export default Products
