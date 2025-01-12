"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import OtpPage from "@/components/payment/OtpPage";
import { useCartStore } from "@/store/useCartStore";

const PaymentPage = () => {
  const {total} = useCartStore();

  return (
    <div 
      className="min-h-[200vh] bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg)",
        backgroundPositionY: "-150px"
      }}
    >
      <div className="flex justify-center">
        <div className="mt-24 w-[500px]">
          <Accordion type="multiple" defaultValue={["address"]}>
            <AccordionItem value="address">
              <AccordionTrigger className="bg-[#45d62b] text-white px-4 py-2 rounded-t-md">
                Address
              </AccordionTrigger>
              <AccordionContent className="bg-black text-white p-4 rounded-b-md">
                <div className="flex flex-col gap-5">
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Mobile No."
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Address Line 1"
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Address Line 2 (optional)"
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Apt, Building"
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Town/city"
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Pin Code"
                  />
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger className="bg-[#45d62b] text-white px-4 py-2 rounded-t-md">
                Payment
              </AccordionTrigger>
              <AccordionContent className="bg-black text-white p-4 rounded-b-md">
                <div className="flex flex-col gap-5">
                  <p className="mb-2">Enter Debit / Credit / ATM card no.</p>
                  <Input
                    className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                    type="text"
                    placeholder="Enter card No."
                  />
                  <div className="flex gap-5">
                    <Input
                      className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                      type="month"
                      placeholder="Expiry Date"
                    />
                    <Input
                      className="bg-transparent border-[#45d62b] focus:ring-[#45d62b]"
                      type="password"
                      placeholder="CVV"
                    />
                  </div>
                  <RadioGroup defaultValue="card" className="mt-5">
                    <div className="flex items-center space-x-2 mb-4">
                      <RadioGroupItem value="netbanking" id="netbanking" />
                      <Label htmlFor="netbanking" className="text-white">Net banking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="text-white">UPI (Paytm, Phonepe, Googlepay)</Label>
                    </div>
                  </RadioGroup>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-24 ml-24 w-[600px] h-[450px] bg-black text-white rounded-lg p-5">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-white">Your Cart</TableCell>
                <TableCell className="text-white"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Total Items</TableCell>
                <TableCell className="text-white">{5}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Subtotal (Excludes local tax)</TableCell>
                <TableCell className="text-white">US${total}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Local Taxes</TableCell>
                <TableCell className="text-white">To be calculated</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Shipping</TableCell>
                <TableCell className="text-white">US$5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Total</TableCell>
                <TableCell className="text-white">US${Number(total) + 5}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-center mt-4">
            <OtpPage/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;