'use client'
import '../../styles/header.css'
import Image from 'next/image'
import logo from '@/public/logo_long.jpg'
import { MouseEventHandler, useState } from 'react'
import { Transition } from '@headlessui/react'
import NavigationBar from './NavigationBar'
import DropdownMobile from './DropdownMobile'
import Link from 'next/link'
import MainButton from './MainButton'

function Header() {

  return (
    <>
      <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-4 w-full bg-white py-2 shadow-md">
        {/* Desktop Menu */}
        <Link href="/" className="flex items-center h-full ml-5 self-center">
          <Image
            src={logo}
            quality={20}
            width={150}
            alt="Logo la piouraterie"
            className="h-auto"
            loading='lazy'
          />
        </Link>

        <div className="flex justify-around items-center">
          <Transition
            className="hidden lg:flex z-50"
            show={true}
            appear={true}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 translate-x-[60px]"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-x-[60px]"
          >
            <NavigationBar />
          </Transition>
          <div className="relative flex items-center ml-2 sm:mx-6">
            <MainButton />
          </div>
        
        <Transition
          className="lg:hidden"
          show={true}
          appear={true}
          enter="transition-all ease-in-out duration-300"
          enterFrom="opacity-0 translate-x-[60px]"
          enterTo="opacity-100 translate-x-0"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-x-[60px]"
        >
          <DropdownMobile />
        </Transition>
        </div>
      </div>
    </>
  )
}

export default Header
