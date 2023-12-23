'use client'

import { useUserStore } from '@/app/store/ProductStore'
import { useRouter } from 'next/navigation'

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const { role } = useUserStore()
  const router = useRouter()

  if (role !== 'admin') router.push('/')
  else return <AdminProvider>{children}</AdminProvider>
}

export default AdminProvider
