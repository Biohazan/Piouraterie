'use client'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import FormProduct from './FormProduct'
import { useRef, useState } from 'react'

const AddProduct = ({ product }: any) => {
  const [tab, setTab] = useState("information");

  const onTabChange = (value: any) => {
    setTab(value);
  }

  return (
    <Tabs
      defaultValue="information"
      value={tab}
      onValueChange={onTabChange}
      className="tabsMainDiv flex flex-col shadow-md"
    >
      <div className="w-full z-10  rounded-t-xl p-6 bg-primary-foreground">
        <TabsList className="grid grid-cols-3 h-10 w-[600px] ">
          <TabsTrigger
            value="information"
            className="pb-3 border-b-2 border-transparent text-black hover:border-gray-400 hover:font-bold"
          >
            Information
          </TabsTrigger>
          <TabsTrigger
            value="image"
            className="pb-3 border-b-2 border-transparent text-black hover:border-gray-400 hover:font-bold"
          >
            Image
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="pb-3 border-b-2 border-transparent text-black hover:border-gray-400 hover:font-bold"
          >
            Détails
          </TabsTrigger>
        </TabsList>
      </div>
      <FormProduct product={product} setTab={setTab}></FormProduct>
    </Tabs>
  )
}

export default AddProduct
