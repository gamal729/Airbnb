'use client';

import { ShieldCheck, Star, Award } from "lucide-react";
import Avatar from "../navbar/Avatar";

const ListingHostProfile = () => {
    return (
        <div className="pt-8 pb-16">
            <h2 className="text-2xl font-bold mb-8">تعرَّف على مضيفك</h2>

            <div className="bg-[#F0EFE9] rounded-3xl p-8 flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="md:w-1/3 flex flex-col items-center justify-center bg-white rounded-3xl p-8 shadow-lg text-center gap-4">
                    <div className="relative">
                        <Avatar className="w-32 h-32" />
                        <div className="absolute bottom-0 right-0 bg-[#E51D55] text-white p-2 rounded-full border-4 border-white">
                            <Award size={20} />
                        </div>
                    </div>
                    <div className="text-3xl font-bold mt-2">Carole</div>
                    <div className="font-semibold text-lg flex items-center gap-1">
                        <Award size={18} />
                        سوبر هوست
                    </div>

                    <div className="flex w-full justify-between px-4 mt-4">
                        <div className="flex flex-col items-center">
                            <div className="text-xl font-bold">586</div>
                            <div className="text-xs font-semibold">تقييماً</div>
                        </div>
                        <div className="w-[1px] bg-neutral-300"></div>
                        <div className="flex flex-col items-center">
                            <div className="text-xl font-bold flex items-center gap-1">4.93 <Star className="fill-current w-3 h-3" /></div>
                            <div className="text-xs font-semibold">تقييم</div>
                        </div>
                        <div className="w-[1px] bg-neutral-300"></div>
                        <div className="flex flex-col items-center">
                            <div className="text-xl font-bold">7</div>
                            <div className="text-xs font-semibold">سنوات</div>
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">معلومات عن Carole</h3>
                        <div className="text-neutral-600 leading-7">
                            أهلاً، أنا كارول! أحب استضافة الناس من جميع أنحاء العالم. بيتي هو بيتك. أحب السفر والتعرف على ثقافات جديدة.
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">خلال إقامتك</h3>
                        <div className="text-neutral-600 leading-7">
                            أنا متاح دائمًا للمساعدة في أي شيء تحتاجه لجعل إقامتك مريحة قدر الإمكان.
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={24} />
                            <span>تأكيد الهوية</span>
                        </div>
                        <button className="bg-black text-white rounded-lg py-3 px-6 font-semibold w-fit hover:opacity-80 transition">
                            تواصل مع المضيف
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ListingHostProfile;
