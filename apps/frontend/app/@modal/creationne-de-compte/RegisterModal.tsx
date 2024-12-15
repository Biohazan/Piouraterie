'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import RegisterForm from '@/app/components/header/RegisterForm'

const RegisterModal = () => {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <Dialog
      open={pathName === '/creation-de-compte'}
      onOpenChange={() => {
        router.back()
        router.back()
      }}
    >
      <DialogContent>
        <RegisterForm />
      </DialogContent>
    </Dialog>
  )
}

export default RegisterModal
