import { z } from 'zod'

export const ProductSchema = z.object({
  _id: z.string(),
  name: z.string(),
  describe: z.string(),
  picUrl: z.string(),
  price: z.number().positive(),
  category: z.string(),
  popular: z.boolean(),
  colors: z.array(z.string()),
  material: z.string(),
  imageArray: z.array(z.object({ name: z.string(), path: z.string(), main: z.boolean() })),
})

export const ProductsSchema = z.array(ProductSchema)

export const ProductsResponseSchema = z.object({
  products: ProductsSchema,
})

export const ProductResponseSchema = z.object({
  product: ProductSchema,
})

export type ProductSchemaType = z.infer<typeof ProductResponseSchema>
export type ProductType = z.infer<typeof ProductSchema>
