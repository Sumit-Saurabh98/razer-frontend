import React from 'react';
import ProductDetailsImage from './ProductDetailsImage';
import { IProduct } from '@/store/useProductStore';
import ProductDetailsCard from './ProductDetailsCard';

const ProductDetailsMain = ({ product }:{product: IProduct}) => {
  return (
    <div>
      {/* For mobile screens (base) */}
      <div className="md:hidden">
        <div className="flex flex-col">
          <div className="w-full">
            <ProductDetailsImage product={product} />
          </div>
          <div className="w-full">
            <ProductDetailsCard product={product} />
          </div>
        </div>
      </div>

      {/* For medium screens and up */}
      <div className="hidden md:block">
        <div className="flex flex-col">
          <div className="w-full">
            <ProductDetailsImage product={product} />
          </div>
          <div className="w-full">
            <ProductDetailsCard product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsMain;