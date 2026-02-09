'use client';

import { Wifi, Utensils, Waves, Car, Snowflake } from "lucide-react";

const LocationAmenities = () => {
    const amenities = [
        { label: "مطبخ", icon: Utensils },
        { label: "واي فاي", icon: Wifi },
        { label: "مسبح", icon: Waves },
        { label: "موقف سيارات مجاني في الأبنية", icon: Car },
        { label: "مكيف", icon: Snowflake },
    ];

    return (
        <div className="py-12 border-b border-neutral-200 text-center">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800">الميزات الشائعة في إيجارات العطلات في سافانا</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {amenities.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2 border border-neutral-200 rounded-xl p-6 w-[150px] h-[120px] shadow-sm hover:shadow-md transition">
                        <item.icon size={32} className="text-primary" strokeWidth={1.5} />
                        <span className="font-semibold text-sm">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationAmenities;
