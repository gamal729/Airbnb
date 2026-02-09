'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const MiddleNav = () => {
    const router = useRouter();
    const params = useSearchParams();
    const activeTab = params?.get("tab") || "البيوت";

    const tabs = [
        { label: "البيوت", value: "homes" },
        { label: "تجارب السفر", value: "experiences" },
        { label: "الخدمات", value: "services" },
    ];

    const handleTabClick = (label: string) => {
        let url = '/';
        if (label === 'تجارب السفر') {
            url = '/?tab=experiences';
        } else if (label === 'الخدمات') {
            url = '/?tab=services';
        }
        router.push(url);
    };

    return (
        <div className="hidden md:flex flex-row items-center justify-center gap-8">
            {tabs.map((tab) => (
                <div
                    key={tab.label}
                    onClick={() => handleTabClick(tab.label)}
                    className={`
            cursor-pointer 
            text-sm 
            font-medium 
            transition 
            hover:text-neutral-800 
            hover:bg-neutral-100 
            px-4 
            py-2 
            rounded-full
            ${activeTab === tab.label || (activeTab === "homes" && tab.label === "البيوت") || (activeTab === "experiences" && tab.label === "تجارب السفر") ? "text-neutral-900 font-bold" : "text-neutral-500"}
          `}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default MiddleNav;
