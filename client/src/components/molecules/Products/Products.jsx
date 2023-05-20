import Button from '@/components/atoms/Button/Button';
import React from 'react'
import ProductsTable from '../table/products';
import { useRouter } from "next/navigation";

const Products = () => {
    const { push } = useRouter();
  return (
    <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">Add Products</span>
        <Button
          text={"Add Food Products"}
          onClick={() => {
            push("product/add");
          }}
        />

        <ProductsTable />
      </div>
  )
}

export default Products