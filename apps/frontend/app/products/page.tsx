'use client'
import MainProducts from '../components/MainProducts'
import LeftMenu from '../components/LeftMenu'
import ProductBar from '../components/ProductBar'

const Products = () => { 

  return (
    <section className="flex">
      <LeftMenu />
      <div className="flex flex-col items-center w-full p-6 text-center">
        <ProductBar />
        <MainProducts />
      </div>
    </section>
  )
}

export default Products
