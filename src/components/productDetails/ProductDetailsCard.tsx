"use client"
import React, { useState} from "react";
import { Truck, Store} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IProduct } from "@/store/useProductStore";
import dateRange from "@/lib/date";
import { useCartStore } from "@/store/useCartStore";
import { useUserStore } from "@/store/useUserStore";
import toast from "react-hot-toast";

const ProductDetailsCard = ({ product }:{ product: IProduct}) => {
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);

  const {addToCart} = useCartStore();

    const {user} = useUserStore();
	const handleAddToCart = () => {
		if(!user){
            toast.error("Please login to add product to cart", {id: "error"});
            return;
        }else{
            addToCart(product);
        }
	};

  return (
    <div className="bg-black w-full md:w-full">
      <div className="px-10 py-10 flex flex-col justify-center items-center">
        <p className="text-[#44B10B] text-2xl font-bold pb-4">
          {product.title}
        </p>
        <div className="w-full flex justify-evenly">
        <div>
          <div className="flex items-center pb-2">
            <Truck className="text-white" size={20} />
            <p className="pl-1.5 text-white">Order now, delivered by:</p>
          </div>
          <ul className="text-gray-400">
            <li>{dateRange("fast")} — US$20.00</li>
            <li>{dateRange("standard")} — US$10.00</li>
          </ul>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-[#44B10B] p-0">
                View Delivery Options
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#111111] text-white border-[#44B10B]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl py-6">
                  Delivery Options
                </DialogTitle>
              </DialogHeader>
              <div className="text-center">
                <p className="pb-4">{product.title}</p>
                <div className="pb-5">
                  <p className="text-white">Express Shipping</p>
                  <p className="text-gray-400">Apr 25 - Apr 27</p>
                  <p className="text-white">US$20.00</p>
                </div>
                <Separator className="bg-gray-600" />
                <div className="py-2.5">
                  <p className="text-white">Standard Shipping</p>
                  <p className="text-gray-400">Apr 27 - May 01</p>
                  <p className="text-white">US$10.00</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div>
          <div className="flex items-center pb-2">
            <Store className="text-white" size={20} />
            <p className="pl-1.5 text-white">Pickup at Reflex Store:</p>
          </div>
          <ul className="text-gray-400">
            <li>Available stocks in 11 Reflex store</li>
          </ul>

          <Dialog open={isStoreModalOpen} onOpenChange={setIsStoreModalOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="text-[#44B10B] p-0">
                View Reflex store Locations
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#252525] max-w-4xl border-[#44B10B]">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl pt-6 pb-1 text-white">
                  Reflex Store Locations
                </DialogTitle>
                <p className="text-white text-center pb-5">
                  for Reflex Basilisk V3 X HyperSpeed
                </p>
              </DialogHeader>
              <div className="text-center">
                <p className="text-white">From Today*, Apr 20</p>
                <p className="text-gray-400">
                  *Order must be collected within 14 days
                </p>
                <p className="text-gray-400 pb-4">
                  No delivery charge for pickup
                </p>

                {[
                  {
                    name: "rEFLEX sTORE AUSTIN",
                    address1: "11410 Century Oaks Terrace",
                    address2: "Suite 125, H08, Austin, TX 78758",
                  },
                  {
                    name: "rEFLEX sTORE KING OF PRUSSIA",
                    address1: "160 North Gulph Road",
                    address2: "Suite 2352, King of Prussia, PA 19406",
                  },
                  {
                    name: "rEFLEX sTORE LAS VEGAS",
                    address1: "The Linq Promenade 3545 S",
                    address2: "Las Vegas Blvd L-27, Las Vegas, NV 89109",
                  },
                  {
                    name: "rEFLEX sTORE LOS ANGELES",
                    address1: "10250 Santa Monica Blvd",
                    address2: "#2460 Level 2, Los Angeles, CA 90067",
                  },
                  {
                    name: "rEFLEX sTORE MIAMI",
                    address1: "7535 North Kendall Drive",
                    address2: "Suite 1510A, Miami, FL 33156",
                  },
                ].map((store, index) => (
                  <div key={store.name}>
                    <div className="flex justify-evenly pb-5 pt-5">
                      <Button variant="link" className="text-[#44B10B] p-0">
                        {store.name}
                      </Button>
                      <div>
                        <p className="text-white">{store.address1}</p>
                        <p className="text-gray-400">{store.address2}</p>
                      </div>
                    </div>
                    {index < 4 && <Separator className="bg-gray-600" />}
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        </div>
        <Button
          className="w-[40%] bg-[#44B10B] hover:bg-[#2e7806]"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailsCard;