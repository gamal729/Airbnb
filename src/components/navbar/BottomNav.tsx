// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const BottomNav = () => {
//   const router = useRouter();
//   const [active, setActive] = useState("explore");

//   const handleClick = (tab: string, url: string) => {
//     setActive(tab);
//     router.push(url);
//   };

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-md md:hidden z-50">
//       <div className="flex justify-around items-center py-2">
//         {/* Explore / Search */}
//         <button
//           onClick={() => handleClick("explore", "/")}
//           className="flex flex-col items-center text-xs text-neutral-500 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`h-6 w-6 mb-1 ${
//               active === "explore" ? "text-pink-500" : "text-neutral-400"
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             />
//           </svg>
//           Explore
//         </button>

//         {/* Wishlists */}
//         <button
//           onClick={() => handleClick("wishlists", "/wishlists")}
//           className="flex flex-col items-center text-xs text-neutral-500 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`h-6 w-6 mb-1 ${
//               active === "wishlists" ? "text-pink-500" : "text-neutral-400"
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 8v-6"
//             />
//           </svg>
//           Wishlists
//         </button>

//         {/* Log in */}
//         <button
//           onClick={() => handleClick("login", "/login")}
//           className="flex flex-col items-center text-xs text-neutral-500 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className={`h-6 w-6 mb-1 ${
//               active === "login" ? "text-pink-500" : "text-neutral-400"
//             }`}
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18c0-3.313 2.686-6 6-6s6 2.687 6 6"
//             />
//           </svg>
//           Log in
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BottomNav;





"use client";

import { usePathname, useRouter } from "next/navigation";

const BottomNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 shadow-[0_-1px_6px_rgba(0,0,0,0.06)] z-[9999]">
      <div className="flex justify-around items-center py-2">

        {/* Explore */}
        <button
          onClick={() => router.push("/")}
          className="flex flex-col items-center text-xs transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 mb-1 ${
              isActive("/") ? "text-pink-500 scale-110" : "text-neutral-500"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          استكشاف
        </button>

        {/* Wishlists */}
        <button
          onClick={() => router.push("/wishlists")}
          className="flex flex-col items-center text-xs transition-all"
        >
          <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 mb-1 ${
            isActive("/wishlists")
            ? "text-pink-500 scale-110"
            : "text-neutral-500"
        }`}
        viewBox="0 0 24 24"
        fill={isActive("/wishlists") ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.5l-1.45-1.32C5.4 14.36 2 11.28 2 7.5 2 5 4 3 6.5 3c1.74 0 3.41 1 4.22 2.44C11.53 4 13.2 3 14.94 3 17.44 3 19.5 5 19.5 7.5c0 3.78-3.4 6.86-8.55 11.68L12 20.5z"
        />
        </svg>
          المفضلة
        </button>

        {/* Log in */}
        <button
          onClick={() => router.push("/login")}
          className="flex flex-col items-center text-xs transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 mb-1 ${
              isActive("/login")
                ? "text-pink-500 scale-110"
                : "text-neutral-500"
            }`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
          </svg>
          تسجيل الدخول
        </button>

      </div>
    </div>
  );
};

export default BottomNav;







