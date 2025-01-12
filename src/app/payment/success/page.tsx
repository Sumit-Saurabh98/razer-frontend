"use client"

import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useCartStore } from "@/store/useCartStore";

const PaymentSuccess = () => {
  
    const {total} = useCartStore()

  return (
    <div 
      className="min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPositionY: "-150px"
      }}
    >
      <div className="pt-24 flex flex-col items-center">
        <div className="w-[70px] -mb-12 z-10">
          <Image
            src="/PaymentPage/Tictak.png"
            alt="Success checkmark"
            width={70}
            height={70}
            className="py-5"
          />
        </div>

        <div className="text-white text-center bg-[#101010] w-full max-w-4xl px-6">
          <div className="pt-6">
            <h4 className="text-xl font-bold pt-3">
              Payment Successful
            </h4>
            <p className="text-gray-400">Thank you for using Razer Gold.</p>
            <p className="text-gray-400">
              Please keep this receipt for your own reference. Here are the
              details of Your Razer Gold Purchase.
            </p>
          </div>

          <Card className="w-[65%] mx-auto my-6 bg-[#252525] text-white border-none rounded-lg">
            <div className="p-5 space-y-4">
              <p className="text-left">
                TRANSACTION INFORMATION
              </p>
              
              <div>
                <p className="text-left text-gray-400">
                  Payment Amount
                </p>
                <p className="text-left mt-1">
                  US${total}
                </p>
              </div>

              <div>
                <p className="text-left text-gray-400">
                  Payment Method
                </p>
                <p className="text-left mt-1 pb-2">
                  Credit Card
                </p>
              </div>
            </div>
          </Card>

          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;