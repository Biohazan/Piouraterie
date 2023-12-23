import { getServerSession } from 'next-auth'
import AdminHeader from './AdminHeader'
import AdminLeftMenu from './AdminLeftMenu'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import './style.css'
import { Toaster } from '@/components/ui/toaster'

export default async function AdministrationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  if (
    session &&
    session.user.role === 'admin' &&
    session.user.email === 'administratorette@lapiouraterie.com'
  ) {
    return (
      <section className="flex flex-col w-full bg-white min-h-screen">
        <div className="flex flex-auto">
          <AdminLeftMenu />
          <div className="flex flex-col flex-auto w-full p-6 ">
            <AdminHeader />
            <div className="adminProducts p-2 mt-6">{children}</div>
            <Toaster />
          </div>
        </div>
      </section>
    )
  } else redirect('/')
}
