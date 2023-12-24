import { ProductsSchema } from '@/app/schema/products.schema'
import AdminProductCard from '../AdminProductCard'
import AddProductCard from './AddProductCard'

const AdminProducts = async () => {
  // State or Variables Management
  let arrayOfCategory: string[] = []
  // Fetch Query //
  const options = {
    method: 'GET',
    next: { tags: ['products'] },
  }
  const endpoint = 'products/all'
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${endpoint}`, options)
  const data = await res.json()
  const parsedData = ProductsSchema.parse(data)

  parsedData?.forEach((products: any) => {
    if (arrayOfCategory.includes(products.category)) return
    else {
      arrayOfCategory.push(products.category)
    }
  })
  return (
    <div className="flex flex-col p-2 bg-primary-foreground rounded-3xl">
      {/* {Filtre Les Categories } */}
      {arrayOfCategory.map((category, index) => (
        <div className="categoryFilter mb-10" key={'div' + index}>
          <h2 className="categoryTitle text-lg p-2 border-b border-dotted  border-black mb-4">
            {category[0].toUpperCase() +
              category.slice(1, category.length).replaceAll('_', ' ')}
          </h2>
          <div
            key={index}
            className="gridOfProduct flex flex-wrap justify-start gap-6  px-4 items-start w-full"
          >
            {/* Affiche les produits des # categories */}
            {parsedData
              ?.filter((products: any) => products.category === category)
              .map((product: any, index: number) => (
                <AdminProductCard
                  product={product}
                  key={'productcard' + index}
                />
              ))}
            <AddProductCard category={category} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AdminProducts
