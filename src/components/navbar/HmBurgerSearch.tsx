
import { Search } from "lucide-react";

const HmBurgerSearch = () => {
  return (
    <div className="p-4">
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search Razer.com"
            className="w-full py-2 pl-10 pr-4 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Second Input (Optional) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Optional Input"
            className="w-full py-2 px-4 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HmBurgerSearch;
