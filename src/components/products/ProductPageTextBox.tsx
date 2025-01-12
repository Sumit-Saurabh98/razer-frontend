import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

// Text Decoration Components
const ProductPageSmallGrayText = ({ t }: { t: string }) => {
  return (
    <p className="text-sm text-gray-400 mb-4">
      {t}
    </p>
  );
};

const ProductPageGrayText = ({ t }:{ t: string }) => {
  return (
    <p className="text-gray-400 text-lg leading-relaxed">
      {t}
    </p>
  );
};

const ProductPageButton = () => {
  return (
    <Button 
      variant="ghost" 
      className="text-white hover:text-[#44d62c] hover:bg-transparent group flex items-center gap-2"
    >
      Buy Now
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};

// Main Components
export function ProductPageTextBox({ h, t }:{ h: string, t: string }) {
  return (
    <div className="bg-[#111111]">
      <div className="flex flex-col items-center text-center py-8 w-[70%] mx-auto">
        <h2 className="text-[#44d62c] text-4xl mb-4">{h}</h2>
        <ProductPageGrayText t={t} />
      </div>
    </div>
  );
}

export function ProductPageCard({ img, h1, t }: { img: string, h1: string, t: string }) {
  return (
    <div className="text-white bg-[#111111] border-b border-[#44d62c]">
      <div className="bg-[#1a1a1a]">
        <Image 
        width={400}
        height={400}
          src={img} 
          alt={h1} 
          className="w-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl mb-2">{h1}</h3>
        <ProductPageSmallGrayText t={t} />
        <Link href="/store/laptops">
          <ProductPageButton />
        </Link>
      </div>
    </div>
  );
}