import Image from 'next/image'
import Link from 'next/link'
import { FunctionComponent } from 'react'

export type ProductCardProps = {
  id: string
  name: string
  picUrl: string
  description: string
  price: number
}

const ProdutCard: FunctionComponent<ProductCardProps> = ({
  id,
  name,
  picUrl,
  description,
  price,
}) => (
  <Link
    href={`/${id}`}
    className="group relative block shadow-lg overflow-hidden cursor-pointer max-w-60 xl:max-w-[300px]"
  >
    <div className='flex w-full'>
      <Image
        src={picUrl}
        width={400}
        height={400}
        blurDataURL="blur"
        alt="Première photo d'article"
        className="group-hover:scale-110 transition-all"
      />
    </div>
    <div className="absolute inset-0 flex flex-col items-end justify-between ">
      <button className="group m-4  relative inline-block overflow-hidden border bg-black border-black px-4 lg:px-7 py-1 lg:py-2 focus:outline-none focus:ring">
        <span className="absolute inset-y-0 left-0 w-[2px] bg-white transition-all group-hover:w-full group-active:bg-indigo-500"></span>

        <span className="relative text-xs lg:text-sm font-medium text-white transition-colors group-hover:text-black">
          Ajouter au panier
        </span>
      </button>
      <div className="flex flex-col w-full items-start backdrop-blur-md bg-black/20 p-1">
        <div className="flex justify-between items-center w-full px-2">
          <h3 className="text-sm xl:text-xl font-medium text-white">{name}</h3>
          <p className="text-white  rounded-xl ">{price}€</p>
        </div>

        <p className="mt-1.5 max-w-[40ch] min-h-[30px] text-xs xl:text-sm text-white px-2 ">
          {description}
        </p>
      </div>
    </div>
  </Link>
)

export default ProdutCard
