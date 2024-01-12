import { ProductSchema } from '@/app/schema/products.schema'
import AddProduct from './AddProduct'
import { getAuthSession } from '@/lib/auth'

const fetchProducts = async (productId: string) => {
  const session = await getAuthSession()  
  const option = {
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/${productId}`, option)
  
  const data = await res.json()    
  // console.log(data);
  return ProductSchema.parse(data)
  // return data
}

const Page = async ({
  searchParams,
}: {
  searchParams: { productId: string, category: string }
}) => {  
  const initialData = {
    _id: '',
    name: '',
    describe: '',
    picUrl: '',
    price: null,
    category: searchParams?.category || '',
    popular: false,
    material: ''
    // imageArray: [{}],
  }

  if (searchParams.productId !== 'nouveau_produit') {
    const fetchedProduct = await fetchProducts(searchParams?.productId) 
    return <AddProduct product={fetchedProduct} />
  }

  return <AddProduct product={initialData} />
}

export default Page
