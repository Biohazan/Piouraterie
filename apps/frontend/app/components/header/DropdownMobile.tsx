import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import React from 'react'

const DropdownMobile = () => {
  return (
    <DropdownMenu>
      {/* Burger and Mobile Menu */}
      <DropdownMenuTrigger
        id="toggleLabel"
        aria-label="Ouvrir le menu"
        className="mx-4 sm:mx-6"
      >
        <span id="burger"></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 mt-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex items-center gap-3 p-4">
              Maroquinerie
            </AccordionTrigger>

            <AccordionContent className="" role="menu">
              <Link
                href="/produits?category=etuis_à_cigarettes"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Etuis à cigarettes</DropdownMenuItem>
              </Link>

              <Link
                href="/produits?category=portes_monnaies"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Portes monnaies</DropdownMenuItem>
              </Link>

              <Link
                href="/produits?category=escarcelles"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Escarcelles </DropdownMenuItem>
              </Link>

              <Link
                href="/produits?category=blague_à_tabac"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Blague à tabac </DropdownMenuItem>
              </Link>
              <Link
                href="/produits?category=sacs_et_sacoches"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Sacs & Sacoches </DropdownMenuItem>
              </Link>
              <Link
                href="/produits?category=etuis_jeux_de_cartes"
                className="block rounded-lg px-4 py-2 text-sm  hover:bg-gray-50 hover:text-gray-700"
              >
                <DropdownMenuItem>Etuis pour jeux de cartes </DropdownMenuItem>
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <DropdownMenuItem>
          <Link href="/produits?category=bijoux" className="p-2">
            Bijoux
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/produits?category=commandes_sur_mesure" className="p-2">
            Commandes sur mesure
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/produits?category=cheques_cadeaux" className="p-2">
            Chèques Cadeaux
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMobile
