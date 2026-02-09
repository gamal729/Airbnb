'use client';

import { Star } from "lucide-react";
import Avatar from "../navbar/Avatar";

const ListingReviews = () => {
    return (
        <div className="pt-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-8">
                <Star className="fill-current" />
                4.93 · 586 تقييمًا
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <Avatar />
                            <div className="flex flex-col">
                                <div className="font-semibold">Ahmed</div>
                                <div className="text-neutral-500 text-sm">يوليو 2026</div>
                            </div>
                        </div>
                        <div className="text-neutral-600 leading-6">
                            مكان رائع وهادئ، قريب من كل شي. المضيف كان متعاون جداً وسريع في الرد. المكان نظيف ومرتب وفيه كل الاحتياجات.
                        </div>
                    </div>
                ))}
            </div>
            <button className="border border-black rounded-lg py-3 px-6 font-semibold w-fit mt-8 hover:bg-neutral-100 transition">
                إظهار الميزات الـ 44
            </button>
        </div>
    );
}

export default ListingReviews;
