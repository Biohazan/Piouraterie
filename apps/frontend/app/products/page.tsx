'use client'
import MainProducts from '../components/MainProducts'
import LeftMenu from '../components/LeftMenu'
import ProductBar from '../components/ProductBar'
import { useRef } from 'react'

const Products = () => { 

  const productNumber = useRef<Number>(0)

  return (
    <section className="flex">
      <LeftMenu />
      <div className="flex flex-col items-center w-full p-6 text-center">
        <ProductBar productNumber={productNumber} />
        <MainProducts productNumber={productNumber} />
      </div>
    </section>
  )
}

export default Products
