import MainProducts from '../components/MainProducts'
import LeftMenu from '../components/LeftMenu'
import { ProductsSchema } from '../schema/products.schema'

// export const fetchProducts = async (
//   catParams: string | null,
//   sortOrder: string,
// ) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_URL}/products/${catParams}?${sortOrder}`,
//   )
//   const data = await res.json()  
//   return data
// }

const Products = async ({
  searchParams,
}: {
  searchParams?: { category: string | undefined }
}) => {
  const catParams = searchParams?.category ? searchParams?.category : 'all'
  // const initialData = await fetchProducts(catParams, '')

  return (
    <section className="flex min-h-screen">
      <LeftMenu />
      <div className="flex flex-col items-center w-full p-2 py-6 text-center">
        {/* <MainProducts products={initialData} catParams={catParams} /> */}
      </div>
    </section>
  )
}

export default Products
