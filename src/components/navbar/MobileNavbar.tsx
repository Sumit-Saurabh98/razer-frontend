import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { HammerIcon } from "lucide-react";
import HmBurgerSearch from "./HmBurgerSearch";
import OnclickCart from "./OnClickCart";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-black">

      <div className="flex justify-between p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#45d62b] text-2xl"
        >
          <HammerIcon size={40} />
        </button>
        <div className="pt-1 pr-4">
          <OnclickCart />
        </div>
      </div>


      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-black text-white max-w-[300px] w-full">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <button onClick={() => setIsOpen(false)} className="text-gray-400">
                <span className="h-5 w-5">&times;</span>
              </button>
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png"
                alt="Razer Logo"
                width={40}
                height={40}
                className="hover:cursor-pointer"
              />
            </div>
          </DialogHeader>

            <HmBurgerSearch />
            <div className="space-y-4">
              {["Store", "PC", "Console", "Mobile", "Lifestyle", "Services", "Community"].map((item, index) => (
                <Link href={`/${item.toLowerCase()}`} key={index}>
                  <p className="text-white hover:text-[#45d62b] text-lg block py-2">{item}</p>
                </Link>
              ))}
            </div>
        </DialogContent>
      </Dialog>

      <Header />
    </div>
  );
};

export default MobileNavbar;
