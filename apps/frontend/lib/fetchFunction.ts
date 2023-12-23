import { ProductSchemaType } from '@/app/schema/products.schema'
import { useQuery } from '@tanstack/react-query'
import { getAuthSession } from './auth'

export type optionsType = {
  method?: string
  body?: BodyInit
  headers?: {
    authorization: string
  }
}

export const fetchFonction = async (options: optionsType, endpoint: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${endpoint}`, options)
  return res
}

export const getProduct = async (productId: string, options: optionsType) => {
  console.log('query')

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/product/${productId}`,
    options,
  )
  const data = await res.json()
  return data
}

export const editProduct = async ({
  productId,
  options,
}: {
  productId: string
  options: optionsType
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/product/${productId}`,
    options,
  )
  const data = await res.json()
  return data
}

export const useProduct = (
  productId: string,
  product: any,
  options: optionsType,
) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId, options),
    initialData: product,
    enabled: product._id !== '',
  })
}

export const useProducts = () => {
  let options = { method: 'get' }
  let endpoint = 'products/all'
  return useQuery({
    queryKey: ['products', options, endpoint],
    queryFn: () => fetchFonction(options, endpoint),
  })
}
