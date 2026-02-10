'use client';

import ListingCard from "@/components/listings/ListingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface LocationListingsProps {
    title: string;
    subtitle?: string;
    listings: any[];
    currentUser?: any | null;
}

const LocationListings: React.FC<LocationListingsProps> = ({
    title,
    subtitle,
    listings,
    currentUser
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <div className="py-8 border-b border-neutral-200">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-800">{title}</h2>
                    {subtitle && <p className="text-neutral-500 mt-1">{subtitle}</p>}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full border border-neutral-300 hover:shadow-md transition"
                    >
                        <ChevronRight size={18} />
                    </button>
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full border border-neutral-300 hover:shadow-md transition"
                    >
                        <ChevronLeft size={18} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 scroll-smooth"
            >
                {listings.map((listing) => (
                    <div key={listing.id} className="min-w-[250px] sm:min-w-[280px] md:min-w-[300px]">
                        <ListingCard
                            currentUser={currentUser}
                            data={listing}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationListings;
