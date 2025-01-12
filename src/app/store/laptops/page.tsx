"use client";
import React, { useEffect } from 'react';
import { useProductStore } from '@/store/useProductStore';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import ProductCard from '@/components/products/ProductCard';
import NavLink from '@/components/products/NavLink';
import Filter from '@/components/products/Filter';


const Laptops = () => {

    const {getProducts, products, loadingProduct} = useProductStore();

    useEffect(() => {
      getProducts();
    }, []);


    if(loadingProduct) return <LoadingSpinner/>

  return (
    <div className="bg-[#222]">
      {/* Header Section */}
      <div className="bg-black text-center p-10">
        <h1 className="text-xl text-white mt-10">PC</h1>
        <nav className="flex justify-evenly w-[60%] mx-auto mt-5">
          <NavLink href="/pc/laptops" isActive={true}>LAPTOPS</NavLink>
          <NavLink href="/pc/monitors" isActive={false}>MONITORS</NavLink>
          <NavLink href="/pc/desktops" isActive={false}>DESKTOPS & CASES</NavLink>
          <NavLink href="/pc/egpus" isActive={false}>EGPUS</NavLink>
          <NavLink href="/pc/accessories" isActive={false}>ACCESSORIES</NavLink>
          <NavLink href="/pc/components" isActive={false}>COMPONENTS</NavLink>
          <NavLink href="/pc/cooling" isActive={false}>COOLING</NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex justify-center mt-5">
        {/* Filter Section */}
        <div className="w-[20%] h-[500px] text-white mr-2.5">
          <Filter />
        </div>

        {/* Products Grid */}
        <div className="w-[70%] ml-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products?.length > 0 && products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptops;