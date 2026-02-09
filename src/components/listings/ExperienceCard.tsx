import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart } from "lucide-react";
import { AiFillStar } from "react-icons/ai";

interface ExperienceCardProps {
    data: any;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/experiences/${data.id}`)}
            className="group cursor-pointer flex flex-col gap-2 w-full"
        >
            <div className="aspect-[3/4] w-full relative overflow-hidden rounded-xl">
                <Image
                    fill
                    src={data.imageSrc}
                    alt={data.title}
                    className="
            object-cover 
            h-full 
            w-full 
            group-hover:scale-110 
            transition
          "
                />
                <div className="absolute top-3 right-3 z-10">
                    <button className="text-white hover:scale-110 transition">
                        <Heart size={24} className="fill-neutral-500/50 stroke-white" />
                    </button>
                </div>
                {data.original && (
                    <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm">
                        Original
                    </div>
                )}
                {/* Overlay gradient for text readability if needed, but Airbnb usually has white text on bottom or plain text below */}
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                    <AiFillStar size={14} />
                    <span className="text-sm font-light">{data.rating}</span>
                    <span className="text-sm text-neutral-500">({Math.floor(Math.random() * 100)})</span>
                </div>
                <div className="font-light text-neutral-500 text-sm truncate">
                    {data.location}
                </div>
                <div className="font-semibold text-sm line-clamp-2 leading-tight">
                    {data.title}
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                    <span className="font-semibold text-sm">بدءًا من ${data.price}</span>
                    <span className="font-light text-sm">/ للضيف</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
