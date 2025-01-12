"use client"

import React, { useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const SearchModal: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="group relative p-2 rounded-full transition-all duration-300 hover:bg-gray-800"
          aria-label="Open Search"
        >
          <Search className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
          <span className="sr-only">Search</span>
        </button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-2xl border-0 bg-gray-900 p-0 gap-0">
        <DialogHeader className="p-0">
          <DialogClose asChild>
            <button
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
        </DialogHeader>

        <div className="p-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            
            <input
              ref={inputRef}
              type="text"
              placeholder="Search razer.com"
              className="w-full bg-gray-800 text-white placeholder-gray-400 
                         rounded-lg pl-12 pr-4 py-3 
                         border border-gray-700
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                         transition-all duration-200
                         text-base md:text-lg"
            />
          </div>

          {/* Quick Links Section */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Popular Searches</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {['Laptops', 'Keyboards', 'Mice', 'Headsets', 'Gaming Chair', 'Accessories'].map((item) => (
                <button
                  key={item}
                  className="text-left text-gray-300 hover:text-white hover:bg-gray-800 
                           rounded px-3 py-2 text-sm transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Recently Viewed Section */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-400 mb-3">Recently Viewed</h3>
            <div className="space-y-2">
              {['Razer Blade 16', 'BlackWidow V4 Pro', 'Razer Basilisk V3 Pro'].map((item) => (
                <button
                  key={item}
                  className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-800 
                           rounded px-3 py-2 text-sm transition-colors duration-200
                           flex items-center"
                >
                  <Search className="h-4 w-4 mr-2 text-gray-400" />
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;