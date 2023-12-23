import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className="p-4 py-6 gap-3 text-base">
            Maroquinerie
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-96 rounded-md border border-gray-100 shadow-lg">
            <ul className="w-[270px]">
              <div className="font-bold p-4 pb-0">Maroquineire</div>
              <Link
                href="/produits?category=etuis_à_cigarettes"
                className="flex px-2 pt-2 !no-underline"
              >
                <span className="inline-flex w-full rounded-lg p-4 hover:bg-accent ">
                  Etuis à cigarettes
                </span>
              </Link>

              <Link
                href="/produits?category=portes_monnaies"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent ">
                  Portes monnaies
                </span>
              </Link>

              <Link
                href="/produits?category=escarcelles"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent ">
                  Escarcelles{' '}
                </span>
              </Link>

              <Link
                href="/produits?category=blague_à_tabac"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent">
                  Blague à tabac{' '}
                </span>
              </Link>
              <Link
                href="/produits?category=sacs_et_sacoches"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent">
                  Sacs & Sacoches{' '}
                </span>
              </Link>
              <Link
                href="/produits?category=etuis_jeux_de_cartes"
                className="flex px-2 pb-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent ">
                  Etuis pour jeux de cartes{' '}
                </span>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className="p-4 py-6 gap-3 text-base">
            Bijoux
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-96 rounded-md border border-gray-100 shadow-lg">
            <ul className="w-[270px]">
              <div className="font-bold p-4 pb-0">Bijoux</div>
              <Link
                href="/produits?category=colliers"
                className="flex px-2 pt-2 !no-underline"
              >
                <span className="inline-flex w-full rounded-lg p-4 hover:bg-accent ">
                  Colliers
                </span>
              </Link>

              <Link
                href="/produits?category=boucles_d_oreilles"
                className="flex px-2 pb-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-4 hover:bg-accent ">
                  Boucles D&apos;oreilles
                </span>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="p-0">
          <Link
            href="/produits?category=commandes_sur_mesure"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="p-4 rounded-md gap-3 text-base  hover:bg-accent hover:text-accent-foreground !no-underline">
              Commandes sur mesure
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-0">
          <Link
            href="/produits?category=cheques_cadeaux"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="p-4 rounded-md gap-3 text-base hover:bg-accent hover:text-accent-foreground !no-underline">
              Chèques Cadeaux
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationBar
