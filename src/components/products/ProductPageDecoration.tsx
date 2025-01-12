import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function ProductPageGrayText({ t }:{t: string}) {
  return (
    <p className="text-sm text-[#999999]">
      {t}
    </p>
  );
}

export function ProductPageSmallGrayText({ t }:{t: string}) {
  return (
    <p className="text-[15px] text-[#999999] pt-[5px] pb-[10px]">
      {t}
    </p>
  );
}

export function ProductPageButton() {
  return (
    <Button
      variant="link"
      className="text-[#44d62c] font-normal text-[15px] pr-5 hover:no-underline group"
    >
      Learn More
      <ChevronRight 
        className="w-5 h-5 mt-1 ml-1 group-hover:translate-x-1 transition-transform" 
      />
    </Button>
  );
}