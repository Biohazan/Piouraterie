import Image from 'next/image'
import prezLogo from '../../public/arbreFlou.jpg'

const Prez = async () => {
  return (
    <section className="flex lg:flex-col justify-center w-full">
      <div className="relative w-full bg-white">
        <Image
          src={prezLogo}
          alt="Photo de l'arbre à briquets"
          width={2500}
          className="object-cover w-full h-[80vh] sm:max-h-screen"
        />
        <div className="absolute bottom-[6vw] right-[6vw] ml-[6vw] max-w-xl flex flex-col items-center justify-center text-center px-4 py-8 rounded-xl bg-white max-lg:shadow-md">
          <h1 className="py-1 text-xl font-bold underline underline-offset-4">
            BIENVENUE SUR LA PIOURATERIE !
          </h1>
          <p className="pb-3 font-bold text-sm">
            Notre toute nouvelle boutique vous propose un large choix
            d&apos;accessoires !
          </p>

          <p className="py-1 pt-3 text-sm">
            Chacune de nos créations sont <strong>uniques</strong>, entièrements confectionnées
            et cousues à la main.
          </p>

          <p className="py-1 text-sm">
            Que ce soit pour offrir ou vous faire plaisir, il vous est possible
            de réaliser une commande personnalisée selon vos goûts et vos
            envies.
          </p>

          <p className="py-1 text-sm">
            N&apos;hésitez pas à nous contacter pour créer sur mesure votre
            cadeau idéal !
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prez
