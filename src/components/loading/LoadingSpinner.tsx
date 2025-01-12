

import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner= ({
  text = "Loading...",
  className = ""
}) => {
  return (
    <div className={`h-screen bg-black/90 flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 text-green-500 animate-spin" />
        <span className="text-white text-lg">
          {text}
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;