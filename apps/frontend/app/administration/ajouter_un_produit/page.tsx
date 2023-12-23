import { ProductSchema } from '@/app/schema/products.schema'
import AddProduct from './AddProduct'
import { getAuthSession } from '@/lib/auth'

const fetchProducts = async (productId: string) => {
  const session = await getAuthSession()
  console.log('Page fetchproducts:', session?.user.role);
  
  const option = {
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  }
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/product/${productId}`, option)
  // console.log(res);
  
  const data = await res.json()    
  return ProductSchema.parse(data)
  // return data
}

const Page = async ({
  searchParams,
}: {
  searchParams: { productId: string, category: string }
}) => {
  console.log(searchParams?.category );
  
  const initialData = {
    _id: '',
    name: '',
    describe: '',
    picUrl: '',
    price: null,
    category: searchParams?.category || '',
    popular: false
    // imageArray: [{}],
  }

  if (searchParams.productId !== 'nouveau_produit') {
    const fetchedProduct = await fetchProducts(searchParams?.productId) 
    return <AddProduct product={fetchedProduct} />
  }

  return <AddProduct product={initialData} />
}

export default Page
