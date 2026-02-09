'use client';

import { useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

interface ExperienceSectionProps {
    title: string;
    description?: string;
    items: any[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
    title,
    description,
    items
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = useCallback((direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="py-8 border-b-[1px] last:border-b-0" dir="rtl">
            <div className="flex items-end justify-between mb-4 px-4 sm:px-6 md:px-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
                    {description && (
                        <div className="text-neutral-500 mt-1">{description}</div>
                    )}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 bg-white border border-gray-200 rounded-full hover:shadow-md hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={18} />
                    </button>
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 bg-white border border-gray-200 rounded-full hover:shadow-md hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Scroll left"
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
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item) => (
                    <div key={item.id} className="min-w-[200px] sm:min-w-[220px] md:min-w-[240px] snap-start">
                        <ExperienceCard
                            data={item}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
