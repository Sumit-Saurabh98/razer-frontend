import React from 'react';
import { IProduct } from '@/store/useProductStore';
import useCountdown from '@/hooks/useCountdown';

const ProductDetailsNav = ({product}: {product: IProduct}) => {

    const {hours, minutes, seconds} = useCountdown();
  return (
    <div className="bg-[#101010] h-14 w-full">
      <div className="flex justify-between pt-[19px]">
        <p className="text-white pl-5">
          {product.title}
        </p>
        <div className="flex justify-between">
          <p className='text-red-600 font-semibold pr-5'>Deal end in:</p> <p className='text-white pr-5'>{`${hours}:${minutes}:${seconds}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsNav;