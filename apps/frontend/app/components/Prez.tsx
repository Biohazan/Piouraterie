function Prez() {
  return (
    <section className="flex max-lg:flex-col justify-center py-10 px-10 w-full max-w-6xl">
      <div className="prezBackground flex w-full items-center"></div>
      <div className="flex flex-col items-center justify-center text-center px-10 bg-white rounded shadow-md">
        <h1 className="p-8 pb-1 text-2xl font-bold underline underline-offset-4">
          {' '} 
          BIENVENUE SUR LA PIOURATERIE !
        </h1>
        <p className="font-bold">
          {' '}
          Notre toute nouvelle boutique vous propose un large choix
          d&apos;accessoires !
        </p>

        <p className="py-3 pt-6">
          {' '}
          Chacune de nos créations sont uniques, entièrements confectionnées et
          cousues à la main.
        </p>

        <p className="py-3">
          {' '}
          Que ce soit pour offrir ou vous faire plaisir, il vous est possible de
          réaliser une commande personnalisée selon vos goûts et vos envies.
        </p>

        <p className="py-3 pb-8">
          {' '}
          N&apos;hésitez pas à nous contacter pour créer sur mesure votre cadeau
          idéal !
        </p>
      </div>
    </section>
  )
}

export default Prez
