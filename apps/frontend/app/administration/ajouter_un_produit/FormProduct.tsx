'use client'
import { TabsContent } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ImageCropper from './ImageCropper'
import { ProductType } from '@/app/schema/products.schema'
import { Controller, useForm } from 'react-hook-form'
import {
  editProduct,
  fetchFonction,
  getProduct,
  optionsType,
} from '@/lib/fetchFunction'
import { useSearchParams } from 'next/navigation'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useRef } from 'react'
import { toast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { useProductStore } from '@/app/store/ProductStore'
import { Switch } from '@/components/ui/switch'
import { transformAndResizeBody } from '@/lib/cropImage'
import { redirectToProducts } from '../produits/serverActions'

function FormProduct({
  product,
  setTab,
}: {
  product: ProductType
  setTab: any
}) {
  const searchParams = useSearchParams()
  const isNew = searchParams?.get('productId') === 'nouveau_produit'
  const queryClient = useQueryClient()

  /// Récupération des données du produit ///

  const productId = product._id
  const { data: session } = useSession()

  const options = {
    headers: {
      authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  }
  const { updateProduct } = useProductStore()

  const { status, data, isError, error, isInitialLoading, isSuccess } =
    useQuery({
      queryKey: ['product', productId],
      queryFn: () => getProduct(productId, options),
      initialData: product,
      enabled: !isNew,
    })

  useEffect(() => {
    isSuccess && updateProduct(data)
  }, [data, isSuccess, updateProduct])

  const { mutate } = useMutation({
    mutationFn: ({
      productId,
      options,
    }: {
      productId: string
      options: optionsType
    }) => {
      return editProduct({ productId, options })
    },
    onSuccess: (data: any) => {
      console.log('Onsucces Mutate:', data)
      queryClient.invalidateQueries({ queryKey: ['product'] })
      toast({
        title: `${data.name}`,
        description: `${data.name} a été modifié`,
      })
    },
    onError: () => {
      alert('there was an error')
    },
  })

  /// Décaration du formulaire ///
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    defaultValues: data || product,
  })

  /// Reset Form ///
  useEffect(() => {
    isNew && reset({ ...product })
    isNew && console.log('reset')
  }, [isNew, reset, product])

  const fetchedData = { ...data }  

  /// Fonction d'envoi du formulaire ///
  const onSubmit = async (data: any) => {
    // console.log('onSubmit:', data)
    clearErrors()

    if (data.imageArray === undefined || data.imageArray.length === 0) {
      setError('imageArray', {
        type: 'custom',
        message: 'Ajouter au moins une image',
      })
      setTab('image')
      return
    }
    if (product._id === '') {
      const formData = await transformAndResizeBody(data)
      delete data._id
      for (const item in data) {
        if (item === 'imageArray') {
          data[item].forEach((image: any) => {
            formData.append('imageArray[]', JSON.stringify(image))
          })
        } else {
          formData.append(`${item}`, data[item])
        }
      }
      const options = {
        method: 'POST',
        body: formData,
        headers: {
          authorization: `Bearer ${session?.backendTokens.accessToken}`,
        },
      }
      console.log(data)
      // mutate(options, 'product')
      const res = await fetchFonction(options, 'product')
      console.log('res without id: ', res)
      redirectToProducts()
      // if (res.status === 201) {
      //   reset()
      // }
    } else {
      if (!isDirty) {
        console.log(data)

        toast({
          title: "Il n'y a pas de modification....",
          description: "Modifier votre produit avant de l'envoyer",
        })
        return
      } else if (product._id === fetchedData._id) {
        const formData = await transformAndResizeBody(data)
        for (const item in dirtyFields) {
          console.log('not appened')
          if (item === 'imageArray') {
            data[item].forEach((image: any) => {
              formData.append('imageArray[]', JSON.stringify(image))
            })
          } else if (dirtyFields[item]) {
            formData.append(`${item}`, data[item])
          }
        }
        const options = {
          method: 'PUT',
          body: formData,
          headers: {
            authorization: `Bearer ${session?.backendTokens.accessToken}`,
          },
        }
        console.log(data)
        mutate({ productId, options })
        redirectToProducts()
        // const res = await fetchFonction(options, endpoint)
        // console.log('res: ', res)
      }
    }
  }

  if (isInitialLoading) {
    return <span>Loading...</span>
  }

  if (error instanceof Error) {
    // return <span>Error: {error.message}</span>
  }

  return (
    <form
      id="createProduct"
      onSubmit={handleSubmit(onSubmit)}
      className=" flex relative w-full min-h-[510px] bg-primary-foreground"
    >
      {errors && errors.imageArray && (
        <span className="absolute z-50 -top-14 right-16 text-base text-red-500">
          {`${errors.imageArray.message}`}
        </span>
      )}
      <TabsContent
        value="information"
        className="w-full max-w-[800px] min-h-[400px]"
      >
        <div className="m-6 relative">
          <label
            htmlFor="ProductName"
            className={`relative block rounded-md border ${
              errors.name && 'border-red-500'
            } border-accent shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent`}
          >
            <input
              type="text"
              id="ProductName"
              className="peer w-full p-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder={'Nom du produit'}
              defaultValue={isNew ? product.name : data.name}
              {...register('name', {
                required: 'Un nom est requis',
                minLength: {
                  value: 4,
                  message: 'Minimum 4 caratères',
                },
              })}
            />

            <span
              className={`${
                errors.name && 'text-red-500'
              } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
                errors.name ? 'peer-focus:text-sm' : 'peer-focus:text-xs'
              } `}
            >
              {errors.name ? `${errors.name.message}` : 'Nom du produit'}
            </span>
          </label>
          {/* {errors.name && <span className='spanError'>{`${errors.name.message}`}</span>} */}
        </div>
        <div className="m-6">
          <label
            htmlFor="describe"
            className={`relative block rounded-md border ${
              errors.describe && 'border-red-500'
            } border-accent shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent`}
          >
            <textarea
              rows={4}
              id="describe"
              className="w-full peer p-4 mt-2  rounded-lg border-gray-200 align-top shadow-sm sm:text-sm border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Description"
              defaultValue={isNew ? product.describe : data.describe}
              {...register('describe', {
                required: 'Entrer une description',
              })}
            />

            <span
              className={`${
                errors.describe && 'text-red-500'
              } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
                errors.describe ? 'peer-focus:text-sm' : 'peer-focus:text-xs'
              } `}
            >
              {errors.describe ? `${errors.describe.message}` : 'Description'}
            </span>
          </label>
        </div>
        <div className="m-6 ">
          <Controller
            control={control}
            name="category"
            defaultValue={isNew ? product.category : data.category}
            rules={{ required: 'Selectionnez une catégorie' }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Select
                onValueChange={onChange}
                defaultValue={isNew ? product.category : data.category}
                value={value}
              >
                <SelectTrigger
                  className={`${
                    errors.category ? 'border-red-500' : 'border-accent'
                  }  py-7 relative`}
                >
                  <SelectValue
                    placeholder={product.category || 'Categorie'}
                    className={`${errors.category && 'text-red-500'}`}
                  />

                  {errors.category && (
                    <span
                      className={`${
                        errors.category && 'text-red-500'
                      } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  text-sm transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
                        errors.category
                          ? 'peer-focus:text-sm'
                          : 'peer-focus:text-xs'
                      } `}
                    >
                      {errors.category && `${errors.category.message}`}
                    </span>
                  )}
                </SelectTrigger>
                <SelectContent className="">
                  <SelectGroup className="">
                    <SelectLabel className="">Maroquinerie</SelectLabel>
                    <SelectItem value="etuis_à_cigarettes">
                      Etuis à cigarettes
                    </SelectItem>
                    <SelectItem value="portes_monnaies">
                      Portes Monnaie
                    </SelectItem>
                    <SelectItem value="escarcelles">Escarcelles</SelectItem>
                    <SelectItem value="blague_à_tabac">
                      Blague à tabac
                    </SelectItem>
                    <SelectItem value="sacs_et_sacoches">
                      Sac et Sacoches
                    </SelectItem>
                    <SelectItem value="etuis_jeux_de_cartes">
                      Etuis pour jeux de cartes
                    </SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup className="">
                    <SelectLabel className="">Bijoux</SelectLabel>
                    <SelectItem value="colliers">Colliers</SelectItem>
                    <SelectItem value="boucles_d_oreilles">
                      Boucles d&apos;oreilles
                    </SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectItem value="commandes_sur_mesure">
                    Commandes sur mesure
                  </SelectItem>
                  <SelectSeparator />
                  <SelectItem value="cheques_cadeaux">
                    Chèques Cadeaux
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="m-6">
          <label
            htmlFor="price"
            className={`relative block rounded-md border ${
              errors.price && 'border-red-500'
            } border-accent shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent`}
          >
            <input
              type="number"
              id="price"
              className="peer w-full p-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              defaultValue={isNew ? product.price : data.price}
              placeholder=""
              {...register('price', {
                required: 'Entrer un prix',
                min: { value: 1, message: 'Minimum 1' },
                valueAsNumber: true,
              })}
            />

            <span
              className={`${
                errors.price && 'text-red-500'
              } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  ${
                errors.price ? ' text-sm' : 'text-xs'
              } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
                errors.price ? 'peer-focus:text-sm' : 'peer-focus:text-xs'
              } `}
            >
              {errors.price ? `${errors.price.message}` : 'Prix'}
            </span>
          </label>
        </div>
        <div className="m-6 flex justify-center items-center gap-12">
          <div className="flex items-center gap-2 p-4 border border-accent rounded-full">
            <label htmlFor="onSales" className="text-gray-500 font-bold">
              En stock :
            </label>
            <Switch
              id="onSales"
              className="data-[state=unchecked]:bg-red-500 data-[state=checked]:bg-green-500 "
              // checked={product.popular}
              defaultChecked={true}
            />
          </div>
          <div className="flex items-center gap-2 p-4 border border-accent rounded-full">
            <label htmlFor="popular" className="text-gray-500 font-bold">
              Populaire :
            </label>
            <Switch
              id="popular"
              className="data-[state=unchecked]:bg-red-500 data-[state=checked]:bg-yellow-300"
              // checked={product.popular}
              defaultChecked={product.popular || false}
              onCheckedChange={(e) => setValue('popular', e, { shouldDirty: true })}
              {...register('test')}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="image" className="w-full min-h-[400px]">
        <ImageCropper
          product={data}
          control={control}
          watch={watch}
          errors={errors}
          clearErrors={clearErrors}
        />
      </TabsContent>
      <TabsContent value="stock" className="w-full min-h-[400px]"></TabsContent>
    </form>
  )
}

export default FormProduct
