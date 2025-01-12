"use client"

import ProductDetailsDetails from '@/components/productDetails/ProductDetailsDetails';
import ProductDetailsMain from '@/components/productDetails/ProductDetailsMain';
import ProductDetailsNav from '@/components/productDetails/ProductDetailsNav';
import { useProductStore } from '@/store/useProductStore';
import React, { useEffect } from 'react'

const SingleProduct = ({ params }:{ params: { _id: string }}) => {

  const {getSingleProduct, product, loadingProduct} = useProductStore();

  useEffect(() => {
    getSingleProduct(params._id);
  }, []);

  return (
    <div>

        <ProductDetailsNav product={product}/>

        <ProductDetailsMain product={product} />

      <ProductDetailsDetails product={product} />
    </div>
  )
}

export default SingleProduct;