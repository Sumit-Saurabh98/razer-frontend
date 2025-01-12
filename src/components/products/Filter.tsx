import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

const Filter = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Accordion type="single" collapsible className="w-full text-[#44d62c] no-underline">
        <AccordionItem value="screen-sizes" className="px-6 py-8 border-b">
          <AccordionTrigger className="flex justify-between items-center w-full ">
            <span className="text-2xl font-bold">SCREEN SIZES</span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              {["13", "14", "15", "16", "17"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} style={{ accentColor: '#44d62c' }} />
                  <label
                    htmlFor={`size-${size}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {size} inch
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="px-6 py-8 border-b">
          <AccordionTrigger className="flex justify-between items-center w-full">
            <span className="text-2xl font-bold">PRICE</span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              {[
                { id: "low-high", label: "LOW TO HIGH" },
                { id: "high-low", label: "HIGH TO LOW" },
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox id={option.id} style={{ accentColor: '#44d62c' }} />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="color" className="px-6 py-8 border-b">
          <AccordionTrigger className="flex justify-between items-center w-full">
            <span className="text-2xl font-bold">COLOR</span>
          </AccordionTrigger>
          <AccordionContent className="pt-4">
            <div className="space-y-4">
              {["BLACK", "GREEN", "WHITESMOKE", "GRAY"].map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color.toLowerCase()}`} style={{ accentColor: '#44d62c' }} />
                  <label
                    htmlFor={`color-${color.toLowerCase()}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {color}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filter;