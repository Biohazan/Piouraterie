'use server'
import { ProductsSchema } from "@/app/schema/products.schema"
import { fetchFonction } from "@/lib/fetchFunction"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const fetchProducts = async () => {
  const options = {
    method: 'GET',
  }
  const endpoint = 'products/all'
  const res = await fetchFonction(options, endpoint)
  const parsedData = ProductsSchema.parse(res)
  console.log(parsedData);
  
  return parsedData
}

export async function redirectToProducts() {
    revalidateTag('products')
    redirect('/administration/produits')
  }