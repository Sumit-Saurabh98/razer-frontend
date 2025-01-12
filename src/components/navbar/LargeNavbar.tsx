import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./SearchModal";
import OnclickCart from "./OnClickCart";
import Header from "./Header";

const LargeNavbar = () => {
  return (
    <div>
      <div className="bg-black border-b-[1px] border-[#45d62b]">
        <div className="flex justify-center items-center py-4">
          <div className="flex space-x-16">
            <div>
              <Link href="/">
                <>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Razer_snake_logo.svg/1200px-Razer_snake_logo.svg.png"
                    alt="razer.com"
                    width={40}
                    height={40}
                    className="cursor-pointer"
                  />
                </>
              </Link>
            </div>
            <div className="flex space-x-10 justify-center items-center text-gray-400">
              {["Store", "PC", "Console", "Mobile", "LifeStyle", "Services", "Community", "Support"].map((item) => (
                <Link href={`/${item.toLowerCase()}`} key={item}>
                  <p className="hover:text-white">{item}</p>
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <div className="flex space-x-4 justify-center items-center">
                  <SearchModal />
                <OnclickCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default LargeNavbar;
