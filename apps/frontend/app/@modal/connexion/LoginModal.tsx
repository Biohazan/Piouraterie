'use client'

import LoginForm from '@/app/components/LoginForm'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { usePathname, useRouter } from 'next/navigation'

const LoginModal = () => {
  const router = useRouter()
  const pathName = usePathname()

  return (
    <Dialog open={pathName === '/connexion'} onOpenChange={() => router.back()}>
      <DialogContent>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
