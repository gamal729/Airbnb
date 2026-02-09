'use client';

import { Map } from "lucide-react";

const FloatingMapToggle = () => {
    return (
        <div
            className="
        fixed 
        bottom-24 
        w-full 
        flex 
        justify-center 
        z-50
      "
        >
            <div
                className="
          bg-neutral-900 
          text-white 
          flex 
          flex-row 
          items-center 
          gap-2 
          px-4 
          py-2.5 
          rounded-full 
          shadow-xl 
          cursor-pointer 
          hover:scale-105 
          transition
          text-sm
          font-semibold
        "
            >
                Show map
                <Map size={18} />
            </div>
        </div>
    );
}

export default FloatingMapToggle;
