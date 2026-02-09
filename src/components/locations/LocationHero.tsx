'use client';

import Image from "next/image";
import { decode } from "querystring";

interface LocationHeroProps {
    city: string;
}

const LocationHero: React.FC<LocationHeroProps> = ({ city }) => {
    const decodedCity = decodeURI(city);

    return (
        <div className="relative w-full h-[60vh] rounded-3xl overflow-hidden shadow-md">
            <Image
                src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2574&auto=format&fit=crop"
                alt={decodedCity}
                fill
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="absolute top-10 right-10 bg-white p-6 rounded-3xl shadow-xl w-[350px] text-right" dir="rtl">
                <h1 className="text-3xl font-extrabold mb-2 text-neutral-800 leading-snug">
                    إيجارات البيوت الصيفية في {decodedCity}
                </h1>
                <p className="text-sm text-neutral-500 mb-6">
                    إيجاد وحجز أماكن إقامة فريدة على Airbnb
                </p>

                <div className="flex flex-col gap-3">
                    <div className="border border-neutral-300 rounded-lg p-2">
                        <div className="text-[10px] font-bold uppercase text-neutral-800">الموقع</div>
                        <input
                            type="text"
                            value={`${decodedCity}, GA`}
                            className="w-full outline-none text-sm text-neutral-600 truncate bg-transparent"
                            readOnly
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="border border-neutral-300 rounded-lg p-2 flex-1">
                            <div className="text-[10px] font-bold uppercase text-neutral-800">تسجيل الوصول</div>
                            <input
                                type="text"
                                placeholder="إضافة التواريخ"
                                className="w-full outline-none text-sm placeholder:text-neutral-400 bg-transparent"
                            />
                        </div>
                        <div className="border border-neutral-300 rounded-lg p-2 flex-1">
                            <div className="text-[10px] font-bold uppercase text-neutral-800">تسجيل المغادرة</div>
                            <input
                                type="text"
                                placeholder="إضافة التواريخ"
                                className="w-full outline-none text-sm placeholder:text-neutral-400 bg-transparent"
                            />
                        </div>
                    </div>
                </div>

                <button className="w-full bg-[#E51D55] text-white font-bold py-3 rounded-lg mt-6 hover:bg-[#d90b46] transition">
                    بحث
                </button>
            </div>
        </div>
    );
}

export default LocationHero;
