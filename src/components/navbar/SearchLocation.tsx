'use client';

import { MapPin } from "lucide-react";

interface SearchLocationProps {
    value?: string;
    onChange: (value: string) => void;
}

const SearchLocation: React.FC<SearchLocationProps> = ({
    value,
    onChange
}) => {
    const locations = [
        { label: "الرياض, السعودية", subLabel: "وجهة تتميز بالمعالم السياحية مثل برج المملكة" },
        { label: "جدة, السعودية", subLabel: "وجهة رائعة لقضاء عطلات الصيف" },
        { label: "الدمام, السعودية", subLabel: "وجهة مناسبة لتناول طعام على أرقى مستوى" },
        { label: "الخبر, السعودية", subLabel: "وجهة ساحلية جميلة" },
        { label: "أبها, السعودية", subLabel: "وجهة جبلية وباردة" },
        { label: "العلا, السعودية", subLabel: "وجهة تاريخية عريقة" },
        { label: "مكة, السعودية", subLabel: "وجهة دينية وسياحية" },
        { label: "المدينة المنورة, السعودية", subLabel: "وجهة دينية وتاريخية" },
    ];

    return (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-3xl shadow-2xl w-[400px] py-6 z-50 overflow-hidden" dir="rtl">
            <div className="px-8 mb-4 text-xs font-bold text-neutral-500">الوجهات المقترحة</div>
            <div className="flex flex-col">
                {locations.map((item) => (
                    <div
                        key={item.label}
                        onClick={() => onChange(item.label)}
                        className="flex items-center gap-4 px-8 py-3 hover:bg-neutral-100 cursor-pointer transition"
                    >
                        <div className="bg-neutral-100 p-3 rounded-lg text-neutral-600">
                            <MapPin size={22} className="text-neutral-500" />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-neutral-800 font-medium">{item.label}</div>
                            <div className="text-neutral-500 text-sm font-light truncate max-w-[250px]">{item.subLabel}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchLocation;
