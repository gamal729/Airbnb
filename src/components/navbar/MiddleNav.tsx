// 'use client';

// import { useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";

// const MiddleNav = () => {
//     const router = useRouter();
//     const params = useSearchParams();
//     const activeTab = params?.get("tab") || "البيوت";

//     const tabs = [
//         { label: "البيوت", value: "homes" },
//         { label: "تجارب السفر", value: "experiences" },
//         { label: "الخدمات", value: "services" },
//     ];

//     const handleTabClick = (label: string) => {
//         let url = '/';
//         if (label === 'تجارب السفر') {
//             url = '/?tab=experiences';
//         } else if (label === 'الخدمات') {
//             url = '/?tab=services';
//         }
//         router.push(url);
//     };

//     return (
//         <div className="flex flex-row items-center justify-center gap-2 md:gap-8 overflow-x-auto no-scrollbar">
//             {tabs.map((tab) => (
//                 <div
//                     key={tab.label}
//                     onClick={() => handleTabClick(tab.label)}
//                     className={`
//             cursor-pointer 
//             text-xs 
//             md:text-sm 
//             font-medium 
//             transition 
//             hover:text-neutral-800 
//             hover:bg-neutral-100 
//             px-2 
//             md:px-4 
//             py-2 
//             rounded-full
//             whitespace-nowrap
//             ${activeTab === tab.label || (activeTab === "homes" && tab.label === "البيوت") || (activeTab === "experiences" && tab.label === "تجارب السفر") ? "text-neutral-900 font-bold" : "text-neutral-500"}
//           `}
//                 >
//                     {tab.label}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default MiddleNav;








"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MiddleNav = () => {
  const router = useRouter();
  const params = useSearchParams();

  const activeTab = params?.get("tab") || "homes";

  const tabs = [
    {
      label: "البيوت",
      value: "homes",
      icon: "/images/icons8-home-80.png",
      size: 22,
    },
    {
      label: "تجارب السفر",
      value: "experiences",
      icon: "/images/icons8-hot-air-balloon-80.png",
      size: 22,
    },
    {
      label: "الخدمات",
      value: "services",
      icon: "/images/icons8-desk-bell-64.png",
      size: 22,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // تحديث موقع الخط عند تغيير التاب أو حجم الصفحة
  useEffect(() => {
    if (!containerRef.current) return;

    const tabElements = Array.from(
      containerRef.current.querySelectorAll<HTMLDivElement>(".tab-item")
    );

    const activeElement = tabElements.find(
      (el) => el.dataset.value === activeTab
    );

    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [activeTab, containerRef.current?.offsetWidth]);

  const handleTabClick = (value: string) => {
    let url = "/";

    if (value === "experiences") url = "/?tab=experiences";
    else if (value === "services") url = "/?tab=services";

    router.push(url);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        ref={containerRef}
        className="flex flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto no-scrollbar"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <div
              key={tab.value}
              data-value={tab.value}
              className={`
                tab-item
                cursor-pointer
                text-xs md:text-sm
                font-medium
                transition
                hover:text-neutral-800
                hover:bg-neutral-100
                px-3 py-2
                rounded-xl
                whitespace-nowrap
                flex flex-col items-center gap-1
                ${isActive ? "text-neutral-900 font-bold" : "text-neutral-500"}
              `}
              onClick={() => handleTabClick(tab.value)}
            >
              {/* الصورة */}
              <Image
                src={tab.icon}
                alt={tab.label}
                width={tab.size}
                height={tab.size}
                className={`transition-transform duration-300 ${
                  isActive ? "scale-150 opacity-100" : "opacity-80"
                } hover:scale-170`}
              />

              {/* النص */}
              <span>{tab.label}</span>
            </div>
          );
        })}
      </div>

      {/* الخط المتحرك (Indicator) */}
      <div
        className="absolute bottom-0 h-1 bg-neutral-900 rounded-full transition-all duration-300"
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
    </div>
  );
};

export default MiddleNav;





