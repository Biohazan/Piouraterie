import Image from 'next/image'
import arbre from '../../public/arbre_briquets.jpg'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'
import blagueArbre from '../../public/blague_arbre.jpg'

const Describe = () => {
  return (
    <section className="relative px-4 w-full min-h-screen flex flex-col items-center bg-primary-foreground">
      <div className="flex flex-col items-center gap-12 p-10  rounded-xl max-w-6xl">
        <h2 className="text-4xl lg:mb-10 p-6 px-12  shadow-lg bg-accent/50 font-princess rounded-br-3xl rounded-tl-3xl">
          La Piouraterie et vous
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12 lg:mt-6">
          <div className="flex flex-col gap-12 p-2 text-justify lg:mt-24">
            <div>
              La Piouraterie vous propose ses créations en cuir ainsi que des
              bijoux en pierres naturelles.
            </div>
            <div>
              🪡🧵 Chaque pièce est unique, entièrement réalisée et cousue à la
              main sans machine à coudre.
            </div>
            <div>
              💝 Que se soit pour offrir ou vous faire plaisir, nous vous
              offrons la possibilité de confectionner des articles personnalisés
              et des créations sur-mesure, selon vos goûts, vos envies et vos
              besoins, à partir d&apos;une idée, d&apos;un modèle ou même
              d&apos;un croquis, afin de créer ensemble l&apos;article parfait !
            </div>
          </div>
          <Image
            src={arbre}
            alt="Photo de l'arbre à briquets a saint hilaire"
            width={500}
            height={200}
            className="object-cover rounded-xl grow-0 shrink-0 lg:mb-24"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12 lg:mt-6">
          <Image
            src={blagueArbre}
            alt="Photo de l'arbre à briquets a saint hilaire"
            width={500}
            height={200}
            className="object-cover rounded-xl grow-0 shrink-0 lg:mb-24"
          />
          <div className="flex flex-col gap-12 p-2 lg:mt-24">
            <div>
              🗣️💬 Nous discuterons ensemble de votre projet, vous pourrez alors
              choisir vos cuirs, vos fils, vos perles et ornements divers parmi
              un large choix de possibilités !
            </div>
            <div>
              📧 Pour prendre contact, vous pouvez choisir l&apos;option qui
              vous convient le mieux :
              <ul>
                <li className='facebookLink'>
                  ▪️ Directement sur la page Facebook de La Piouraterie, via
                  Messenger en cliquant sur ce lien :&nbsp; &nbsp;
                  <a
                    href="https://www.facebook.com/lapiouraterie/"
                    className="contactWrapper text-xl underline-offset-4 dark:decoration-white"
                  >
                    <strong className="dark:text-white ">
                    La Piouraterie
                    </strong>
                  </a>{' '}
                </li>
                <li className='mailLink'>
                  ▪️ Par mail, à l&apos;adresse{' '}:&nbsp; &nbsp;
                  <a
                    href="mailto:lapiouraterie@gmail.com"
                    className="contactWrapper text-xl underline-offset-4 dark:decoration-white"
                  >
                    <strong className="dark:text-white ">
                      lapiouraterie@gmail.com
                    </strong>
                  </a>{' '}
                </li>
                <li className='instaLink'>▪️ Sur Instagram :&nbsp; &nbsp; <a
                    href="https://www.instagram.com/la_piouraterie"
                    className="contactWrapper text-xl underline-offset-4 dark:decoration-white"
                  >
                    <strong className="dark:text-white ">
                    @la_piouraterie
                    </strong>
                  </a>{' '} </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end m-10 ">
          {/* <Link
            className="relative group inline-flex items-center gap-2 rounded-br-xl rounded-tl-xl px-4 py-3  text-black focus:outline-none focus:ring active:bg-accent"
            href="/produits?category=popular"
          >
            <span className="absolute rounded-br-xl rounded-tl-xl inset-y-0 left-0 w-[2px] bg-accent/50 transition-all group-hover:w-full "></span>

            <span className=" font-medium transition-colors z-10 ">
              {' '}
              Tous les produits{' '}
            </span>
            <FaLongArrowAltRight className="transition-colors z-10" />
          </Link> */}
        </div>
      </div>
    </section>
  )
}

export default Describe
