import React, { useState } from "react";
import Image from "next/image";
import { IProduct } from "@/store/useProductStore";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductDetailsImage = ({ product }: { product: IProduct }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
    setSelectedThumbnail((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
    setSelectedThumbnail((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedThumbnail(index);
  };

  return (
    <div className="relative w-full">
      {product.images.length > 0 && (
        <div
          className="h-[700px] bg-center bg-no-repeat bg-cover text-center relative"
          style={{
            backgroundImage: `url(${product.images[currentImageIndex]})`,
            backgroundSize: '100%'
          }}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Thumbnails */}
          <div className="mr-4 pt-[50px]">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="pt-[70px] pl-4 w-28 h-24 mb-2 cursor-pointer"
                onClick={() => handleThumbnailClick(index)}
              >
                <div 
                  className={`relative w-24 h-20 border ${
                    selectedThumbnail === index 
                      ? 'border-blue-500 border-2' 
                      : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 96px) 100vw, 96px"
                    priority={index === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsImage