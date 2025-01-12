import React from "react";
import { ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className="flex justify-center items-center">
        <p className="text-white text-center">
          Unleash a new age of technology with an arsenal of cutting-edge
          innovations that will keep you ahead of the game.
          <span
            className="ml-2 text-white hover:text-green-500 cursor-pointer inline-flex items-center"
          >
            Shop Now <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
