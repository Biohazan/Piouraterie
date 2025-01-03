import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
      <NavigationMenuItem className="p-0">
          <Link
            href="/produits?category=all"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className="px-2 xl:px-3 py-3 rounded-md gap-3 text-sm  hover:bg-accent hover:text-accent-foreground !no-underline">
              Tous les produits
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className="px-2 xl:px-3 py-6 gap-1 xl:gap-3 text-sm">
            Maroquinerie
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-md border border-gray-100 shadow-lg">
            <ul className="w-[230px]">
              {/* <div className="font-bold p-3 pb-0 text-sm">Maroquinerie</div> */}
              <Link
                href="/produits?category=etuis_à_cigarettes"
                className="flex px-2 pt-2 !no-underline"
              >
                <span className="inline-flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Etuis à cigarettes
                </span>
              </Link>

              <Link
                href="/produits?category=portes_monnaies"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Portes monnaies
                </span>
              </Link>

              <Link
                href="/produits?category=escarcelles"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Escarcelles{' '}
                </span>
              </Link>

              <Link
                href="/produits?category=blague_à_tabac"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Blague à tabac{' '}
                </span>
              </Link>
              <Link
                href="/produits?category=sacs_et_sacoches"
                className="flex px-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Sacs & Sacoches{' '}
                </span>
              </Link>
              <Link
                href="/produits?category=etuis_jeux_de_cartes"
                className="flex px-2 pb-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Etuis pour jeux de cartes{' '}
                </span>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="p-0">
          <NavigationMenuTrigger className=" px-2 xl:px-3 py-6 gap-1 xl:gap-3 text-sm">
            Bijoux
          </NavigationMenuTrigger>
          <NavigationMenuContent className=" rounded-md border border-gray-100 shadow-lg">
            <ul className="w-[230px]">
              {/* <div className="font-bold p-3 pb-0 text-sm">Bijoux</div> */}
              <Link
                href="/produits?category=colliers"
                className="flex px-2 pt-2 !no-underline"
              >
                <span className="inline-flex w-full rounded-lg p-3 hover:bg-accent text-xs">
                  Colliers
                </span>
              </Link>

              <Link
                href="/produits?category=boucles_d_oreilles"
                className="flex px-2 pb-2 !no-underline"
              >
                <span className="flex w-full rounded-lg p-3 hover:bg-accent text-xs">
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
            <NavigationMenuLink className="px-2 xl:px-3 py-3 rounded-md gap-3 text-sm  hover:bg-accent hover:text-accent-foreground !no-underline">
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
            <NavigationMenuLink className="px-2 xl:px-3 py-3 rounded-md gap-3 text-sm hover:bg-accent hover:text-accent-foreground !no-underline">
              Chèques Cadeaux
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationBar
