import { create } from 'zustand'

interface sortState {
  sortOrder: string
  sortName:string
  updateSortOrder: (order: string, name: string) => void
}

export const useSortStore = create<sortState>()((set) => ({
    sortOrder: '',
    sortName: 'Pertinence',
    updateSortOrder: (order, name) => set(() => ({ sortOrder: order, sortName: name })),
  }))

