'use client'
import '../../styles/dot.css'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../components/Loader'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { getProduct } from '@/lib/fetchFunction'
import { useCallback, useEffect, useState } from 'react'
import { productsTitle } from '@/app/components/MainProducts'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

const Product = ({ params }: { params: { productId: string } }) => {
  /// State Management ///
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const productId = params.productId

  /// Query Function ///
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProduct(productId, { method: 'GET' }),
  })

  const scrollTo = (index: number) => {
    api && api.scrollTo(index)
  }

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="flex min-h-screen">
      <Dialog>
        {/* <LeftMenu /> */}
        <div className="flex flex-col w-full lg:w-5/12 items-center sm:m-6 p-4 sm:p-10 sm:rounded-xl bg-primary-foreground ">
          {isLoading && <Loader />}
          {isError && <div>Une erreur est survenue</div>}
          <h1 className="text-4xl mb-8 text-center font-bold">{data?.name}</h1>

          <Carousel
            opts={{
              loop: true,
            }}
            setApi={setApi}
            className="relative"
          >
            <CarouselContent className="">
              {data?.imageArray.map((image: any, index: number) => (
                <CarouselItem key={index} className="flex justify-center">
                  <DialogTrigger>
                    <Image
                      src={image.path}
                      alt={image.name}
                      width={500}
                      height={500}
                      quality={50}
                      placeholder="blur"
                      blurDataURL="data?:image/webp;base64,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"
                      // className="group-hover:scale-110 transition-all duration-200"
                    />
                  </DialogTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute top-2/4 left-2 z-50 bg-white border-2 border-accent" />
            <CarouselNext className="absolute top-2/4 right-2 z-50 bg-white border-2 border-accent" />
            <div className="absolute bottom-0 w-full flex justify-center items-center z-50">
              {data?.imageArray.map((_: any, index: number) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollTo(index)
                  }}
                  className={`embla__dot ${
                    index === current ? ' embla__dot--selected' : ''
                  } `}
                />
              ))}
            </div>
          </Carousel>
          {/* /// Dialog content /// */}
          <DialogContent className="p-0 max-w-xs sm:max-w-xl lg:max-w-3xl">
            <Carousel
              opts={{
                loop: true,
              }}
              setApi={setApi}
              className="relative"
            >
              <CarouselContent className="">
                {data?.imageArray.map((image: any, index: number) => (
                  <CarouselItem key={index} className="flex text-center">
                    <DialogTrigger>
                      <Image
                        src={image.path}
                        alt={image.name}
                        width={1000}
                        height={1000}
                        // quality={50}
                        placeholder="blur"
                        blurDataURL="data?:image/webp;base64,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"
                        // className="group-hover:scale-110 transition-all duration-200"
                      />
                    </DialogTrigger>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute top-2/4 left-2 z-50 bg-white border-2 border-accent" />
              <CarouselNext className="absolute top-2/4 right-2 z-50 bg-white border-2 border-accent" />
              <div className="absolute bottom-0 w-full flex justify-center items-center z-50">
                {data?.imageArray.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollTo(index)
                    }}
                    className={`embla__dot ${
                      index === current ? ' embla__dot--selected' : ''
                    } `}
                  />
                ))}
              </div>
            </Carousel>
          </DialogContent>
          <div className="flow-root m-6 shadow-sm w-full">
            <dl className=" divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="pl-2 font-medium text-gray-900">Descrption</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.describe}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="pl-2 font-medium text-gray-900">Matière</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.material}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="pl-2 font-medium text-gray-900">Couleur</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {data?.colors.map((color: string) => `${color} `)}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="pl-2 font-medium text-gray-900">Categorie</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {productsTitle[data?.category as keyof typeof productsTitle]}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="pl-2 font-medium text-gray-900">Prix</dt>
                <dd className="text-gray-700 sm:col-span-2">{data?.price}€</dd>
              </div>
            </dl>
          </div>
        </div>
      </Dialog>
    </section>
  )
}

export default Product
