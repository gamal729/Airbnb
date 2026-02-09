'use client';

import Image from "next/image";
import { Heart, Share, SquareArrowOutUpRight } from "lucide-react";
import Heading from "../Heading";

interface ListingHeadProps {
    title: string;
    imageSrc: string;
    id: string;
    currentUser?: any | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
    title,
    imageSrc,
    id,
    currentUser
}) => {
    return (
        <>
            <div className="flex items-start justify-between">
                <Heading
                    title={title}
                />
                <div className="flex gap-4 items-center pl-4">
                    <button className="flex items-center gap-1 hover:bg-neutral-100 py-2 px-4 rounded-md transition font-semibold underline">
                        <Share size={18} />
                        المشاركة
                    </button>
                    <button className="flex items-center gap-1 hover:bg-neutral-100 py-2 px-4 rounded-md transition font-semibold underline">
                        <Heart size={18} />
                        حفظ
                    </button>
                </div>
            </div>
            <div className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
          grid
          grid-cols-4
          grid-rows-2
          gap-2
        "
            >
                <div className="col-span-2 row-span-2 relative h-full">
                    <Image
                        alt="Image"
                        src={imageSrc}
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Mocking other images for the gallery effect */}
                <div className="relative h-full">
                    <Image
                        alt="Image"
                        src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=600&auto=format&fit=crop"
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative h-full">
                    <Image
                        alt="Image"
                        src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=600&auto=format&fit=crop"
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative h-full">
                    <Image
                        alt="Image"
                        src="https://images.unsplash.com/photo-1505881402582-c5bc11054f91?q=80&w=600&auto=format&fit=crop"
                        fill
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative h-full">
                    <Image
                        alt="Image"
                        src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=600&auto=format&fit=crop"
                        fill
                        className="object-cover w-full h-full"
                    />
                    <button className="absolute bottom-4 left-4 bg-white border border-neutral-800 py-1.5 px-3 rounded-md flex items-center gap-2 text-sm font-semibold hover:bg-neutral-100 transition shadow-sm z-10">
                        <span className="grid grid-cols-3 gap-[2px]">
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                        </span>
                        إظهار كل الصور
                    </button>
                </div>
            </div>
        </>
    );
}

export default ListingHead;
