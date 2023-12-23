import { create } from 'zustand'
import { ProductType } from '../schema/products.schema'


interface Actions {
  updateProduct: (data: ProductType) => void
  reset: () => void
}

const initialState = {
  _id: '',
  name: '',
  describe: '',
  picUrl: '',
  price: 0,
  category: '',
  imageArray: [],
  popular: false
}

export const useProductStore = create<ProductType & Actions>()(
    (set) => ({
      ...initialState,

      updateProduct: (data) => set(() => ({ ...data})),
      reset() {
        set(initialState)
      },
  }),
)
