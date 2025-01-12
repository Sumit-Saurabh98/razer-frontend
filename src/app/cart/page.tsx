"use client"

import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  CartBigWhiteText,
  CartBlueLinkText,
  CartGrayText,
  CartGreenLinkText,
  CartWhiteHeading,
  CartWhiteSmallText,
} from "@/components/cart/CartTextDecoration";
import { useCartStore } from "@/store/useCartStore";
import CartProductCard from "@/components/cart/CartProductCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Minus } from "lucide-react";
import OrderSummary from "@/components/cart/OrderSummary";
import GiftCouponCard from "@/components/cart/GiftCouponCard";


const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [remaining, setRemaining] = useState(0);

    const { total, subtotal, cart, getCartItems } = useCartStore();

  useEffect(()=>{
    getCartItems()
  }, [])
  

  const savings = subtotal - total;
  const formattedSubtotal = subtotal.toFixed(2);
  const formattedTotal = total.toFixed(2);
  const formattedSavings = savings.toFixed(2);
  const formattedRemaining = remaining.toFixed(2);

  useEffect(() => {
    setRemaining(200 - total);
  },[remaining, total])

  return (
    <div className="bg-black text-white pt-24">
      <div className="bg-[#1c1c1b]">
        <div className="w-4/5 mx-auto flex justify-between py-6">
          <span className="flex gap-2 justify-center items-center">
            <CartWhiteHeading t={`Your cart total is US$`} />
            <p className="line-through text-white text-3xl font-bold">{formattedSubtotal}</p>
            </span>
          <Link href="/payment">
            <Button
              className={`bg-[#44d62c] hover:bg-[#44d62c]/90 text-black w-[120px]`}
            >
              Checkout
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-4/5 mx-auto">
        {cart.length > 0 &&
          cart.map((item) => <CartProductCard key={item._id} item={item} />)}

        <Separator />

        <div className="py-8">
          <div className="flex items-center">
            <CartGreenLinkText t="Become a RazerStore Rewards member " />
            <CartWhiteSmallText t="using your Razer ID and earn up to" />
            <Image
              src="https://www.razer.com/assets/images/silver/zsilver_72x72.png"
              width={18}
              height={18}
              alt="Razer Silver"
              className="mx-1"
            />
            <CartWhiteSmallText
              t={`${Math.ceil(300 / 20)} with this purchase.`}
            />
          </div>
          <CartBlueLinkText t="What is RazerStore Rewards & what can I do with it?" />
        </div>

        <Separator />

        <div className="flex justify-between py-24">
            <GiftCouponCard/>
          {/* <div>
            <Accordion type="single" collapsible className="pb-8">
              <AccordionItem value="promo">
                <AccordionTrigger className="text-[#44d62c]">
                  Have a promo code?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex gap-4">
                    <Input
                      className="w-[300px] bg-transparent border-none focus:ring-0"
                      placeholder="Write your promo code"
                    />
                    <Button
              className={`bg-[#44d62c] hover:bg-[#44d62c]/90 text-black w-[100px]`}
            >
              Apply
            </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}

          <div className="w-1/2">
          {/* <h1 className="text-2xl text-[#44d62c] font-bold mb-4">Order Summery</h1>
            <div className="flex justify-between"> 
                
               <div>
                <CartBigWhiteText t="MRP" />
                <CartGrayText t="included local taxes" />
              </div>
              <CartBigWhiteText t={`US$${formattedSubtotal}`} />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between py-5">
              <CartBigWhiteText t="Discount" />
              <p className="text-2xl text-gray-400">
                <CartBigWhiteText t={`- US$${Number(formattedTotal)*12/100}`} />
              </p>
            </div>
            {<div className="flex justify-between">
              <CartBigWhiteText t="Discount" />
              <p className="text-2xl text-gray-400">
                <CartBigWhiteText t={`- US$${Number(formattedTotal)*12/100}`} />
              </p>
            </div>}
            </div>

            <Separator />

            <div className="flex justify-between py-5">
              <CartBigWhiteText t="Your Total" />
              <CartBigWhiteText t={`US$${Number(formattedTotal)*10/100}`} />
            </div>

            <div className="flex justify-end">
              <Link href="/payment">
                <Button
              className={`bg-[#44d62c] hover:bg-[#44d62c]/90 text-black w-[120px]`}
            >
              Checkout
            </Button>
              </Link>
            </div> */}

            <OrderSummary/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
