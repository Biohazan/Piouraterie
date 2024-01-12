'use server'
import { ProductsSchema } from "@/app/schema/products.schema"
import { fetchFonction } from "@/lib/fetchFunction"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"


export async function redirectToProducts() {
  console.log('revalidateTag');
  
    revalidateTag('products')
    redirect('/administration/produits')
  }