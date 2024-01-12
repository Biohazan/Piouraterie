import Image from 'next/image'
import arbre from '../../public/arbre_briquets.jpg'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Describe = () => {
  return (
    <section className="relative px-4 w-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-center p-10 rounded-xl w-full bg-primary-foreground shadow-xl">
        <h2 className="text-4xl mb-10 p-6 px-12  shadow-lg bg-accent/50 font-princess rounded-br-3xl rounded-tl-3xl">
          La Piouraterie et vous
        </h2>
        <div className="flex justify-around w-full mt-6">
          <p>Voici les meilleurs moment passé parmi vous :</p>
          <Image
            src={arbre}
            alt="Photo de l'arbre à briquets a saint hilaire"
            width={600}
            height={800}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex w-full justify-end m-10 ">
          <Link
            className="relative group inline-flex items-center gap-2 rounded-br-xl rounded-tl-xl px-4 py-3  text-black focus:outline-none focus:ring active:bg-accent"
            href="/produits?category=popular"
          >
            <span className="absolute rounded-br-xl rounded-tl-xl inset-y-0 left-0 w-[2px] bg-accent/50 transition-all group-hover:w-full "></span>

            <span className="text-sm font-medium transition-colors z-10 ">
              {' '}
              Tous les produits{' '}
            </span>
            <FaLongArrowAltRight className="transition-colors z-10" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Describe
