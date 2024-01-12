import { ProductType } from '@/app/schema/products.schema'
import React, { useState } from 'react'
import { useFieldArray, useWatch } from 'react-hook-form'
import { RiAddCircleFill, RiCloseCircleLine } from 'react-icons/ri'

const Details = ({ product, errors, control, watch, clearErrors, register }: any) => {
  const [inputValue, setinputValue] = useState('')
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'colors',
    },
  )
  // const colorsArray = useWatch({ name: 'colors', control, defaultValue: '' })
  const colorsArray = watch('colors')
  const handleAddField = (e: any) => {
    e.preventDefault()
    if (inputValue !== '') {
      append(inputValue)
      setinputValue('')
      clearErrors('colors')
    }
  }

  console.log(colorsArray)

  return (
    <div className="max-w-[800px]">
      <div className="m-6">
        <label
          htmlFor="colors"
          className={`relative flex flex-row flex-wrap gap-2 w-full p-3 rounded-md border ${
            errors.colors && 'border-red-500'
          } border-accent shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent`}
        >
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex w-max bg-accent p-1 px-2 rounded-full mx-1 gap-2 z-10"
            >
              <span className="px-2 font-bold">{colorsArray[index]}</span>
              <button type="button" onClick={() => remove(index)} className="">
                <RiCloseCircleLine className="text-xl text-red-500" />
              </button>
            </div>
          ))}
          <div className="flex items-center p-1 rounded-full border border-accent">
            <input
              type="text"
              id="colors"
              className="px-2 bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
              value={inputValue}
              onChange={(e) => setinputValue(e.target.value)}
            />
            <button type="button" onClick={handleAddField}>
              <RiAddCircleFill className="text-accent text-xl" />
            </button>
          </div>
          <span
            className={`${
              errors.colors && 'text-red-500'
            } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  ${
              errors.colors ? ' text-sm' : 'text-xs'
            } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
              errors.colors ? 'peer-focus:text-sm' : 'peer-focus:text-xs'
            } `}
          >
            {errors.colors ? `${errors.colors.message}` : 'Couleurs'}
          </span>
        </label>
      </div>
      <div className="m-6">
        <label
          htmlFor="material"
          className={`relative block rounded-md border ${
            errors.material && 'border-red-500'
          } border-accent shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent`}
        >
          <input
            type="test"
            id="material"
            className="peer w-full p-4 border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
            defaultValue={product.material}
            placeholder=""
            {...register('material', {
              required: 'Quel est la matière principale ?',
            })}
          />

          <span
            className={`${
              errors.material && 'text-red-500'
            } pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-primary-foreground p-0.5  ${
              errors.material ? ' text-sm' : 'text-xs'
            } transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 ${
              errors.material ? 'peer-focus:text-sm' : 'peer-focus:text-xs'
            } `}
          >
            {errors.material
              ? `${errors.material.message}`
              : 'Matière principale'}
          </span>
        </label>
      </div>
    </div>
  )
}

export default Details
