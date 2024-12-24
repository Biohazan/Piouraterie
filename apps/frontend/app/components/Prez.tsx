import Image from 'next/image'
import prezLogo from '../../public/arbreFlou.jpg'

const Prez = async () => {
  return (
    <section className="flex lg:flex-col justify-center w-full ">
      <div className="relative w-full bg-primary-foreground h-[52vh]">
        <Image
          src={prezLogo}
          alt="Photo de l'arbre à briquets"
          width={2500}
          className="object-cover w-full h-[52vh] sm:max-h-screen"
        />
        <div className="absolute  bottom-[3vw] right-[3vw] ml-[3vw] max-w-xl flex flex-col items-center justify-center text-center px-4 py-6 rounded-bl-3xl rounded-tr-3xl bg-primary-foreground">
          <h1 className="pb-4 text-xl font-bold font-sofia underline underline-offset-4">
            BIENVENUE SUR LA PIOURATERIE !
          </h1>
          <p className="pb-4 font-bold text-base">
            Notre toute nouvelle boutique vous propose un large choix
            d&apos;accessoires !
          </p>

          <p className="py-1 pt-3 text-sm">
            Chacune de nos créations sont{' '}
            <strong className="font-bold">uniques</strong>, entièrements
            confectionnées et{' '}
            <strong className="font-bold">cousues à la main</strong>.
          </p>

          <p className="py-1 text-sm">
            Que ce soit pour offrir ou vous faire plaisir, il vous est possible
            de réaliser une commande personnalisée selon
            <strong className="font-bold"> vos goûts</strong> et{' '}
            <strong className="font-bold"> vos envies</strong>.
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
