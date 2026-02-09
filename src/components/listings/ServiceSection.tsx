'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';

interface ServiceSectionProps {
    title: string;
    items: any[];
    aspectRatio?: "square" | "landscape";
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, items, aspectRatio = "square" }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8 border-b-[1px] last:border-b-0" dir="rtl">
            <div className="flex items-end justify-between mb-4 px-4 sm:px-6 md:px-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll(200)}
                        className="p-1 rounded-full border-[1px] border-neutral-200 hover:shadow-md transition bg-white"
                    >
                        <ChevronRight size={18} />
                    </button>
                    <button
                        onClick={() => scroll(-200)}
                        className="p-1 rounded-full border-[1px] border-neutral-200 hover:shadow-md transition bg-white"
                    >
                        <ChevronLeft size={18} />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="
          flex 
          overflow-x-auto 
          gap-4 
          px-4 
          sm:px-6 
          md:px-8 
          pb-4 
          scrollbar-hide 
          snap-x 
          snap-mandatory
        "
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="
              min-w-[200px] 
              sm:min-w-[220px] 
              md:min-w-[240px] 
              snap-start
            "
                    >
                        <ServiceCard data={item} aspectRatio={aspectRatio} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
