import { useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Heart } from "lucide-react";

interface ServiceCardProps {
    data: {
        id: string;
        title: string;
        location: string | null;
        price: number;
        rating: number | null;
        imageSrc: string;
        minBooking: number | null;
    };
    aspectRatio?: "square" | "landscape";
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data, aspectRatio = "square" }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/services/${data.id}`)}
            className="group cursor-pointer flex flex-col gap-2 w-full"
        >
            <div
                className={`
                    w-full relative overflow-hidden rounded-xl
                    ${aspectRatio === 'square' ? 'aspect-square' : 'aspect-[4/3]'}
                `}
            >
                <Image
                    fill
                    src={data.imageSrc}
                    alt={data.title}
                    className="object-cover h-full w-full group-hover:scale-110 transition"
                />
                <div className="absolute top-3 right-3">
                    <Heart size={24} className="fill-neutral-500/50 text-white" />
                </div>
            </div>
            <div className="flex flex-col gap-1 text-right" dir="rtl">
                <div className="flex items-center gap-1">
                    {data.rating && (
                        <>
                            <AiFillStar size={14} />
                            <span className="text-sm font-light">{data.rating}</span>
                        </>
                    )}
                </div>
                {data.location && (
                    <div className="font-light text-neutral-500 text-sm truncate">
                        {data.location}
                    </div>
                )}
                <div className="font-semibold text-sm line-clamp-2 leading-tight">
                    {data.title}
                </div>
                <div className="flex flex-col gap-0 mt-1">
                    <div className="flex items-baseline gap-1">
                        <span className="font-semibold text-sm">بدءًا من ${data.price}</span>
                        <span className="font-light text-sm">/ للضيف</span>
                    </div>
                    {data.minBooking && (
                        <div className="font-light text-neutral-500 text-xs">
                            الحد الأدنى للحجز ${data.minBooking}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
