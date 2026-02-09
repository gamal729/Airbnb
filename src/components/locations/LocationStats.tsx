'use client';

import { Home, Tag, PawPrint } from "lucide-react";

const LocationStats = () => {
    const stats = [
        {
            icon: Home,
            label: "إجمالي أماكن الإقامة المتاحة للإيجار لقضاء العطلات",
            value: "استكشف 3,590 مكان إقامة مفروشًا للإيجار لقضاء العطلات في سافانا"
        },
        {
            icon: Tag,
            label: "أسعار الليالي تبدأ من",
            value: "تبدأ أماكن الإقامة للإيجار لقضاء العطلات في سافانا من $108 لليلة الواحدة قبل احتساب الضرائب والرسوم"
        },
        {
            icon: PawPrint,
            label: "أماكن إقامة متاحة للإيجار لقضاء العطلات مناسبة للحيوانات الأليفة",
            value: "اعثر على 1,250 مكان إقامة متاحًا للإيجار تسمح باصطحاب الحيوانات الأليفة"
        },
        {
            icon: Home,
            label: "أماكن إقامة للإيجار مناسبة للعائلات لقضاء العطلات",
            value: "2,130 عقارًا يتوفر به مساحة إضافية وميزات مناسبة للأطفال"
        }
    ];

    return (
        <div className="py-12 border-b border-neutral-200">
            <h2 className="text-2xl font-bold mb-8 text-neutral-800 text-center">إحصائيات سريعة عن أماكن إقامة للإيجار مخصصة للعطلات في مدينة سافانا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4 border border-neutral-200 rounded-xl p-6 hover:shadow-md transition bg-white h-full relative overflow-hidden">
                        <div className="font-bold text-lg mb-2 leading-tight">{item.label}</div>
                        <div className="text-neutral-500 text-sm flex-grow">{item.value}</div>
                        <div className="absolute top-6 left-6 text-[#E51D55]">
                            <item.icon size={24} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationStats;
