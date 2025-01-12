import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IProduct } from "@/store/useProductStore";

const ProductDetailsDetails = ({product}:{product: IProduct}) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <div className="bg-zinc-800">
      <div className="px-16 pt-10">
        <h2 className="text-white text-xl font-medium pb-10 text-left">
          TECH SPECS
        </h2>

        <div className="space-y-4">
            {/* Title */}

            <div className="pb-4">
            <div className="flex w-1/2 pb-4">
              <span className="text-white font-bold">NAME</span>
              <span className="text-gray-400 ml-56">{product.title}</span>
            </div>
            <Separator className="bg-zinc-600" />
          </div>

          {/* Form Factor */}
          <div className="pb-4">
            <div className="flex w-1/2 pb-4">
              <span className="text-white font-bold">PROCESSOR</span>
              <span className="text-gray-400 ml-56">{product.specifications?.processor}</span>
            </div>
            <Separator className="bg-zinc-600" />
          </div>

          {/* Processor */}
          <div className="pb-4">
            <div className="flex w-1/2 pb-4">
              <span className="text-white font-bold">WINDOW</span>
              <ul className="list-disc text-gray-400 ml-56">
                <p>{product.specifications?.windows}</p>
              </ul>
            </div>
            <Separator className="bg-zinc-600" />
          </div>

          {/* Battery Life */}
          <div className="pb-4">
            <div className="flex w-1/2 pb-4">
              <span className="text-white font-bold">SCREEN</span>
              <ul className="list-disc text-gray-400 ml-56">
                <p>{product.specifications?.screen} inch</p>
              </ul>
            </div>
            <Separator className="bg-zinc-600" />
          </div>

          {/* Collapsible Section */}
          <div className={`transition-all duration-300  ${show ? 'block' : 'hidden'}`}>
            {/* RGB Lighting */}
            <div className="pb-4">
            <div className="flex w-1/2 pb-4">
              <span className="text-white font-bold">FORCE</span>
              <ul className="list-disc text-gray-400 ml-56">
                <p>{product.specifications?.force}</p>
              </ul>
            </div>
            <Separator className="bg-zinc-600" />
          </div>

            {/* Force */}
            <div className="pb-4">
              <div className="flex w-1/2 pb-4">
                <span className="text-white font-bold">STORAGE</span>
                <span className="text-gray-400 ml-56">{product.specifications?.storage}</span>
              </div>
              <Separator className="bg-zinc-600" />
            </div>

            {/* Storage */}
            <div className="pb-4">
              <div className="flex w-1/2 pb-4">
                <span className="text-white font-bold">COLOR</span>
                <span className="text-gray-400 ml-56">{product.color}</span>
              </div>
              <Separator className="bg-zinc-600" />
            </div>

            {/* Box Contents */}
            <div className="pb-4">
              <div className="flex w-1/2 pb-4">
                <span className="text-white font-bold">BOX CONTENTS</span>
                <ul className="list-disc text-gray-400 ml-56">
                    <li>1x Laptop</li>
                  <li>1x wireless USB cable</li>
                  <li>1 unit Charger</li>
                  <li>1x power cord</li>
                  <li>1x user manual</li>
                </ul>
              </div>
              <Separator className="bg-zinc-600" />
            </div>
          </div>

          {/* Toggle Button */}
          <Button
            variant="ghost"
            onClick={handleToggle}
            className="bg-[#44B10B] hover:bg-[#2e7806] ml-[520px] text-white font-semibold py-2 px-4"
          >
            Show {show ? "Less" : "More"}
            {show ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
      
      <div className="h-12 bg-black"></div>
    </div>
  );
}

export default ProductDetailsDetails;