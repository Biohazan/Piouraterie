import { z } from 'zod'

export const ProductSchema = z.object({
  _id: z.string(),
  name: z.string(),
  describe: z.string(),
  picUrl: z.string(),
  price: z.number(),
  category: z.string(),
  sub_category: z.string(),
})

export const ProductsSchema = z.array(ProductSchema)

export const ProductsResponseSchema = z.object({
  products: ProductsSchema,
})

export const ProductResponseSchema = z.object({
  product: ProductSchema,
})
