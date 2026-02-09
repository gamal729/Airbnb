'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import Avatar from "../navbar/Avatar";
import { Trophy, Award, MapPin } from "lucide-react";

const Map = dynamic(() => import('../Map'), {
    ssr: false
});

interface ListingInfoProps {
    user: any;
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType,
        label: string,
        description: string
    } | undefined;
    locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    locationValue,
}) => {
    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div
                    className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            justify-between
            gap-2
          "
                >
                    <div>غرفة في باريس، فرنسا</div>
                    <Avatar src={user?.image} />
                </div>
                <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
                >
                    <div>{guestCount} ضيف</div>
                    <div>{roomCount} غرفة نوم</div>
                    <div>{bathroomCount} حمام</div>
                </div>
            </div>
            <hr />

            <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center gap-4">
                    <div className="text-neutral-600">
                        <Trophy size={24} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                            مفضل لدى الضيوف
                        </div>
                        <div className="text-neutral-500 font-light">
                            أحد أكثر البيوت التي أحبها الضيوف على Blukh
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="text-neutral-600">
                        <Award size={24} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                            الإقامة لدى Carole
                        </div>
                        <div className="text-neutral-500 font-light">
                            سوبر هوست · 7 سنوات في مجال الاستضافة
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="text-neutral-600">
                        <MapPin size={24} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-lg font-semibold">
                            موقع رائع
                        </div>
                        <div className="text-neutral-500 font-light">
                            95% من الضيوف الجدد أعطوا الموقع تقييم 5 نجوم
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="
        text-lg font-light text-neutral-500 leading-8
      ">
                {description}
            </div>
            <hr />
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">مكان النوم</h3>
                <div className="border border-neutral-200 rounded-xl p-6 w-[200px]">
                    <div className="mb-4">
                        <MapPin size={24} /> {/* Placeholder for bed icon */}
                    </div>
                    <div className="font-semibold mb-1">غرفة النوم</div>
                    <div className="text-sm text-neutral-500">1 سرير مزدوج</div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">ما يقدمه هذا المسكن</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex gap-4 items-center">
                        <MapPin size={24} />
                        <span>واي فاي</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MapPin size={24} />
                        <span>مطبخ</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MapPin size={24} />
                        <span>غسالة</span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <MapPin size={24} />
                        <span>مجفف شعر</span>
                    </div>
                </div>
                <button className="border border-black rounded-lg py-3 px-6 font-semibold w-fit mt-4 hover:bg-neutral-100 transition">
                    عرض الميزات الـ 44
                </button>
            </div>
            <hr />
        </div>
    );
}

export default ListingInfo;
